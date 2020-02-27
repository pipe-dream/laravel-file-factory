import { Template } from '@pipe-dream/core/dist/pipe-dream.js'
import BasePipe from './BasePipe'
import {Formatter} from '@pipe-dream/core/dist/pipe-dream.js'

export default class APIRoutesPipe extends BasePipe {

    static get title() {
        return 'APIRoutesPipe';
    }

    calculateFiles() {
        return this.omc.hasModels() ? [{
            path: "routes/api.php",
            content: Template.for('api.php').replace({
                ___API_ROUTES_BLOCK___: this.apiRoutes(),
            })
        }] : []
    }

    apiRoutes() {
        return this.omc.models().map(model => {
            return Template.for('APIRoute').replace({
                ___RESOURCE_NAME___: Formatter.camelCase(Formatter.pluralize(model.className())),
                ___MODEL_NAME___: model.className(),
                ___MODEL_NAMESPACE___: this.modelNamespace(),
                ___API_CONTROLLER_NAMESPACE___: this.apiControllerNamespace(),
            })
        }).join(___DOUBLE_LINE_BREAK___)
    }
}
