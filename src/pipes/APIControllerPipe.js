import { Template } from '@pipe-dream/core/dist/pipe-dream.js'
import ModelPipe from './ModelPipe';
import F from '../utilities/Formatter'

export default class APIControllerPipe extends ModelPipe {

    static get title() {
        return 'APIControllerPipe';
    }

    calculateFiles(omc) {
        return omc.modelsIncludingUser().map(model => {
            return {
                path: "app/Http/Controllers/" + model.className() + "APIController.php",
                content: Template.for('APIController.php').replace({
                    ___MODEL___: model.className(),
                    ___MODEL_INSTANCE___: F.camelCase(model.className()),
                    ___LOAD_RELATIONSHIPS___: this.loadRelationships(model),
                    ___MODEL_NAMESPACE___: this.modelNamespace(),                    
                })
            }
        })
    }

    loadRelationships(model) {
        return "load([" + [
            ... model.relationships.hasMany.map(target => {
                return F.singleQuotePad(F.camelCase(F.pluralize(target.name)))
            }),

            ... model.relationships.belongsTo.map(target => {
                return F.singleQuotePad(F.camelCase(target.name))
            }),

            ... model.relationships.belongsToMany.map(target => {
                return F.singleQuotePad(F.camelCase(F.pluralize(target.name)))
            }),
        ].join(", ") + "])"
    }
}
