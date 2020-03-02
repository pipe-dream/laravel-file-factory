import {Template,Formatter} from '@pipe-dream/core/dist/pipe-dream.js'
import BasePipe from './BasePipe'

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
        return "database/migrations/" + this.migrationTimeStamp(index) + "_create_" + this.tableName(entity) + "_table.php"
    }

    migrationFileClassName(entity) {
        return "Create" + Formatter.pascalCase(this.tableName(entity)) + "Table"
    }

    tableName(entity) {
        return entity.tableName
        let name = entity.name
        if (entity.isPivotTableEntity())
            name = entity.name.split('_').map(e => Formatter.laravelSnakeCase(e)).sort().join('_')
        if (entity.isModelEntity()) {
            // A model can have multiple words in PascalCase
            // But only the last word needs to be plural
            name = Formatter.laravelSnakeCase(name.replace(/(([A-Z])[a-z]+)$/g, m => Formatter.pluralize(m)))
        }
        return Formatter.snakeCase(name)

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
        return [
            `$table->${attribute.properties.dataType}('${attribute.properties.name}')${this.chainings(attribute)};`,
            ...this.addForeignKeyConstraintFor(attribute)
        ].join(___SINGLE_LINE_BREAK___)
    }

    addForeignKeyConstraintFor(attribute) {
        if (window.store.getters.settings.LaravelFileFactory["Foreign Key restraints"]["value"])
            return attribute.properties.foreign ? [
                `$table->foreign('${attribute.properties.name}')->references('id')->on('${attribute.properties.foreign}');`
            ] : [];
        return []
    }

    chainings(attribute) {
        let chainings = ""
        if (attribute.properties.index) chainings += "->index()";
        if (attribute.properties.nullable || attribute.properties.dataType === "timestamp") chainings += "->nullable()";
        if (attribute.properties.unique) chainings += "->unique()";
        return chainings
    }

    migrationTimeStamp(index) {
        // prepare timestamp parts
        let current_datetime = new Date(),
            year = current_datetime.getFullYear(),
            month = String(current_datetime.getMonth() + 1).padStart(2, '0'),
            day = String(current_datetime.getDate()).padStart(2, '0'),
            hour = String(current_datetime.getHours()).padStart(2, '0'),
            minute = String(current_datetime.getMinutes()).padStart(2, '0')

        // Assume at most 99 migrations
        index = String(index).padStart(2, '0')

        // Example: 2014_10_12_000000
        return `${year}_${month}_${day}_${hour}${minute}${index}`
    }
}

