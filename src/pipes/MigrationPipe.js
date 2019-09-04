import { Template } from '@pipe-dream/core'
import BasePipe from './BasePipe'
import F from '../utilities/Formatter'
import {ModelEntity} from '@pipe-dream/core'

export default class MigrationPipe extends BasePipe {

    static get title() {
        return 'MigrationPipe';
    }

    calculateFiles(omc = ObjectModelCollection) {
        return omc.inOptimalMigrationOrder().map((entity, index) => {
            return {
                path: this.migrationFilePath(entity, index),
                content: Template.for('Migration.php').replace({
                    ___CLASS_NAME___: this.migrationFileClassName(entity),
                    ___TABLE___: this.tableName(entity),
                    ___COLUMNS_BLOCK___: this.columns(entity),
                    ___SOFT_DELETES_BLOCK___: entity.softdeletes ? "$table->softDeletes();" : "",
                    ___MODEL_NAMESPACE___: this.modelNamespace(),                    
                })
            }
        })
    }

    migrationFilePath(entity, index) {
        return "database/migrations/" + this.migrationTimeStamp(index) +"_create_" + this.tableName(entity) + "_table.php"
    }

    migrationFileClassName(entity) {
        return "Create" + F.pascalCase(this.tableName(entity)) + "Table"
    }

    tableName(entity) {
        if(entity.isTableEntity()) {
            return entity.name
        }        

        return F.snakeCase(F.pluralize(entity.name))

        /*
            // This old implementation is now broken! Why!
            if(!(entity instanceof ModelEntity)) {
                return entity.name
            }        
        */
    }

    columns(entity) {
        return entity.attributes.map(attribute => {
            return this.statementsFor(attribute)
        }).reduce((allStatements, statements) => allStatements.concat(statements), []).join(___SINGLE_LINE_BREAK___)
    }

    statementsFor(attribute) {
        console.log(attribute.properties)
        return [
            `$table->${attribute.properties.dataType}('${attribute.properties.name}')${this.chainings(attribute)};`,
            ... this.addForeignKeyConstraintFor(attribute)
        ].join(___SINGLE_LINE_BREAK___)
    }

    addForeignKeyConstraintFor(attribute) {
        return attribute.properties.foreign ? [
            `$table->foreign('${attribute.properties.name}')->references('id')->on('${attribute.properties.foreign}');`
        ] : [];
    }

    chainings(attribute) {
        let chainings = ""
        if(attribute.properties.index) chainings += "->index()";
        if(attribute.properties.nullable || attribute.properties.dataType === "timestamp") chainings += "->nullable()";
        if(attribute.properties.unique) chainings += "->unique()";
        return chainings
    }

    migrationTimeStamp(index) {
        // prepare timestamp parts
        let current_datetime = new Date(),
            year = current_datetime.getFullYear(),
            month = String(current_datetime.getMonth() + 1).padStart(2,'0'),
            day = String(current_datetime.getDate()).padStart(2,'0'),
            hour = String(current_datetime.getHours()).padStart(2,'0'),
            minute = String(current_datetime.getMinutes()).padStart(2,'0')

        // Assume at most 99 migrations
        index = String(index).padStart(2,'0')

        // Example: 2014_10_12_000000
        return `${year}_${month}_${day}_${hour}${minute}${index}`
    }
}

