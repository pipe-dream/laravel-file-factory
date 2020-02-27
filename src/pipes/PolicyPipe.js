import {Template} from '@pipe-dream/core/dist/pipe-dream.js'
import ModelPipe from './ModelPipe';
import {Formatter} from '@pipe-dream/core/dist/pipe-dream.js'


export default class PolicyPipe extends ModelPipe {

    static get title() {
        return 'PolicyPipe';
    }

    calculateFiles(omc = ObjectModelCollection) {
        return [
            ...this.PolicyFiles()
        ]
    }

    PolicyFiles() {
        return this.omc.models().map(model => {
            let isUser = model.isUserEntity()
            let namespaceBlock = ""
            if(!isUser)
                namespaceBlock = `use ${this.modelNamespace()}\\${model.className()};`
            return {
                // Laravel can auto-discover policies as long as they are in a
                // "Policies" directory directly beneath the directory housing
                // the models.
                path: this.modelPath() + "/Policies/" + model.className() + "Policy.php",
                content: Template.for('Policy.php').replace({
                    ___MODEL___: this.className(model),
                    ___NAMESPACE_BLOCK___: namespaceBlock,
                    ___MODEL_NAMESPACE___: this.modelNamespace(),
                    ___RESOURCE_NAME___: model.className() === 'User' ? "other"+Formatter.pascalCase(model.className()) : Formatter.camelCase(model.className()),
                })
            }
        })
    }
}
