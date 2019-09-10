import { Template } from '@pipe-dream/core/dist/pipe-dream.js'
import ModelPipe from './ModelPipe';

export default class UserPipe extends ModelPipe {

    static get title() {
        return 'UserPipe';
    }

    calculateFiles(omc = ObjectModelCollection) {

        if(!omc.hasUserModel()) return [];
        let user = omc.userModel()

        return [{
            path:  this.modelPath() + "/User.php",
            content: Template.for('User.php').replace({
                ___HIDDEN___: this.hiddenAttributes(user),
                ___FILLABLE___: this.fillableAttributes(user),
                ___CASTS_BLOCK___: this.casts(user) ? this.casts(user) : "//",
                ___RELATIONSHIP_METHODS_BLOCK___: this.relationshipMethods(user),
                ___MODEL_NAMESPACE___: this.modelNamespace(),
                ___DATES___: this.dates(user)
            })
        }]
    }
}
