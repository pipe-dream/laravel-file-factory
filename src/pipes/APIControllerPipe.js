import {Template, Formatter, Schema} from '@pipe-dream/core/dist/pipe-dream.js'
import ModelPipe from './ModelPipe';

export default class APIControllerPipe extends ModelPipe {

    static get title() {
        return 'APIControllerPipe';
    }

    calculateFiles(omc) {
        console.log("Schema",Schema.models)
        return Schema.models.map(model => {
            return {
                path: this.apiControllerPath() + "/" + model.className() + "APIController.php",
                content: Template.for('APIController.php').replace({
                    ___MODEL___: model.className(),
                    ___MODEL_INSTANCE___: Formatter.camelCase(model.className()),
                    ___LOAD_RELATIONSHIPS___: this.loadRelationships(model),
                    ___MODEL_NAMESPACE___: this.modelNamespace(),
                    ___API_CONTROLLER_PATH___: this.apiControllerPath(),
                    ___API_CONTROLLER_NAMESPACE___: this.apiControllerNamespace(),
                })
            }
        })
    }

    loadRelationships(model) {
        return "load([" + [
            ...model.relationships.hasMany.map(target => {
                return Formatter.singleQuotePad(Formatter.camelCase(Formatter.pluralize(target.name)))
            }),

            ...model.relationships.belongsTo.map(target => {
                return Formatter.singleQuotePad(Formatter.camelCase(target.name))
            }),

            ...model.relationships.belongsToMany.map(target => {
                return Formatter.singleQuotePad(Formatter.camelCase(Formatter.pluralize(target.name)))
            }),
        ].join(", ") + "])"
    }
}
