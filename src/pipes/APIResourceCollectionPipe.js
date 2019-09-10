import { Template } from '@pipe-dream/core/dist/pipe-dream.js'
import ModelPipe from './ModelPipe';

export default class APIResourceCollectionPipe extends ModelPipe {

    static get title() {
        return 'APIResourceCollectionPipe';
    }

    calculateFiles(omc = ObjectModelCollection) {
        return [
            ... this.APIResourceFiles(),
        ]
    }

    APIResourceFiles() {
        return this.omc.modelsIncludingUser().map(model => {
            return {
                path: "app/Http/Resources/" + model.className() + "Collection.php",
                content: Template.for('APIResourceCollection.php').replace({
                    ___MODEL___: this.className(model),
                    ___MODEL_NAMESPACE___: this.modelNamespace(),                    
                })
            }
        })
    }
}
