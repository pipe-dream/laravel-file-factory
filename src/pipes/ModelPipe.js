import {Template} from '@pipe-dream/core'
import BasePipe from './BasePipe'
import F from '../utilities/Formatter'

export default class ModelPipe extends BasePipe {

    static get title() {
        return 'ModelPipe';
    }

    calculateFiles(omc = ObjectModelCollection) {
        return omc.modelsExceptUser().map(model => {
            return {
                path: this.modelPath() + "/" + model.className() + ".php",
                content: Template.for('Model.php').replace({
                    ___CLASS_NAME___: this.className(model),
                    ___HIDDEN___: this.hiddenAttributes(model),
                    ___FILLABLE___: this.fillableAttributesWithoutDates(model),
                    ___CASTS_BLOCK___: this.casts(model) ? this.casts(model) : "//",
                    ___RELATIONSHIP_METHODS_BLOCK___: this.relationshipMethods(model),
                    ___SOFT_DELETES_BLOCK___: this.softDeletes(model) ? "use \\Illuminate\\Database\\Eloquent\\SoftDeletes;" : "",
                    ___MODEL_NAMESPACE___: this.modelNamespace(),
                    ___DATES___: this.dates(model)
                })
            }
        })
    }

    fillableAttributesWithoutDates(model) {
        return this.horisontalStringList(
            model.attributes.filter(attribute => attribute.properties.dataType !== "timestamp")
                .map(attribute => attribute.properties.name),
            ""
        )
    }

    dates(model) {
        let dateTypes = ["datetime", "date", "timestamp"];
        return this.horisontalStringList(
            model.attributes.filter(attribute => dateTypes.includes(attribute.properties.dataType))
                .map(attribute => attribute.properties.name),
            ""
        )
    }

    softDeletes(model) {
        return model.softdeletes
    }

    hiddenAttributes(model) {
        return this.horisontalStringList(
            model.attributes.filter(attribute => attribute.properties.hidden)
                .map(attribute => attribute.properties.name),
            "//" // default value
        )
    }

    fillableAttributes(model) {
        return this.horisontalStringList(
            model.attributes.filter(attribute => attribute.properties.fillable)
                .map(attribute => attribute.properties.name),
            "//" // default value
        )
    }

    casts(model) {

        const dataTypeCasts = {
            'int': 'integer',
            'integer': 'integer',
            'real': 'real',
            'float': 'float',
            'double': 'double',

            'bit': 'boolean',
            'boolean': 'boolean',

            'array': 'array',
            'json': 'object',
            'collection': 'collection'
        }

        model.attributes.forEach(attribute => {
            if (attribute.properties.cast === null && dataTypeCasts[attribute.properties.dataType])
                attribute.properties.cast = dataTypeCasts[attribute.properties.dataType]
        })

        return model.attributes.filter(attribute => attribute.properties.cast)
            .map(attribute => "'" + attribute.properties.name + "' => '" + attribute.properties.cast + "'")
            .join(",\n")

    }

    className(model) {
        return model.name
    }

    relationshipMethods(model) {
        return [
            model.relationships.hasOne.map(target => {
                return Template.for('HasOneRelationship').replace({
                    ___TARGET_CLASS___: target.className(),
                    ___THIS_CLASS___: model.className(),
                    ___METHOD_NAME___: F.camelCase(
                        target.className()
                    ),

                })
            }).join(___DOUBLE_LINE_BREAK___),

            model.relationships.hasMany.map(target => {
                return Template.for('HasManyRelationship').replace({
                    ___TARGET_CLASS___: target.className(),
                    ___TARGET_CLASS_PLURAL___: F.pluralize(target.className()),
                    ___THIS_CLASS___: model.className(),
                    ___METHOD_NAME___: F.pluralize(
                        F.camelCase(
                            target.className()
                        )
                    ),

                })
            }).join(___DOUBLE_LINE_BREAK___),

            model.relationships.belongsTo.map(target => {
                return Template.for('BelongsToRelationship').replace({
                    ___TARGET_CLASS___: target.className(),
                    ___THIS_CLASS___: model.className(),
                    ___METHOD_NAME___: F.camelCase(target.className()),
                })
            }).join(___DOUBLE_LINE_BREAK___),

            model.relationships.belongsToMany.map(target => {
                return Template.for('BelongsToManyRelationship').replace({
                    ___TARGET_CLASS___: target.className(),
                    ___TARGET_CLASS_PLURAL___: F.pluralize(target.className()),
                    ___THIS_CLASS___: model.className(),
                    ___METHOD_NAME___: F.pluralize(
                        F.camelCase(
                            target.className()
                        )
                    ),

                })
            }).join(___SINGLE_LINE_BREAK___),

        ].filter(candidate => (candidate != "")).join(___DOUBLE_LINE_BREAK___)
    }
}
