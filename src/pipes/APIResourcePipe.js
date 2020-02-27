import {Template} from '@pipe-dream/core/dist/pipe-dream.js'
import ModelPipe from './ModelPipe';
import {Formatter} from '@pipe-dream/core/dist/pipe-dream.js'


export default class APIResourcePipe extends ModelPipe {

    static get title() {
        return 'APIResourcePipe';
    }

    calculateFiles(omc = ObjectModelCollection) {
        return [
            ...this.APIResourceFiles(),
        ]
    }

    APIResourceFiles() {
        return this.omc.models().map(model => {
            return {
                path: "app/Http/Resources/" + model.className() + "Resource.php",
                content: Template.for('APIResource.php').replace({
                    ___COLUMNS_BLOCK___: this.columnsBlock(model),
                    ___MODEL___: this.className(model),
                    ___MODEL_NAMESPACE___: this.modelNamespace(),
                })
            }
        })
    }

    columnsBlock(model) {
        return model.attributes.filter(attribute => {
            return !['password', 'remember_token'].includes(attribute.properties.name)
        }).map(attribute => {
            return Formatter.singleQuotePad(attribute.properties.name) + " => $this->" + attribute.properties.name
        }).concat(model.relationships.hasMany.concat(model.relationships.belongsToMany).map(target => {
            return Formatter.singleQuotePad(Formatter.snakeCase(Formatter.pluralize(target.name))) + " => new " + Formatter.pascalCase(target.name) + "Collection($this->whenLoaded(" + Formatter.singleQuotePad(Formatter.snakeCase(Formatter.pluralize(target.name))) + "))"
        })).concat(model.relationships.belongsTo.map(target => {
            return Formatter.singleQuotePad(Formatter.snakeCase(target.name)) + " => new " + Formatter.pascalCase(target.name) + "Resource($this->whenLoaded(" + Formatter.singleQuotePad(Formatter.snakeCase(target.name)) + "))"
        })).join(",\n")
    }
}
