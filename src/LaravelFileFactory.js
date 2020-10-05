
import defaultPreferences from './preferences/defaultSchema'
import userSystemSketch from './sketches/userSystemSketch'
import collect from 'collect.js'
import SampleAppSketchButton from './utilities/sketchButtons/SampleApp'

import Setting from '@pipe-dream/core/src/utilities/Setting'

import templates from './templates/compiledTemplates'

import APIControllerPipe from './pipes/APIControllerPipe'
import APIResourcePipe from './pipes/APIResourcePipe'
import APIResourceCollectionPipe from './pipes/APIResourceCollectionPipe'
import APIRoutesPipe from './pipes/APIRoutesPipe'
import ControllerPipe from './pipes/ControllerPipe'
import FactoryPipe from './pipes/FactoryPipe'
import MigrationPipe from './pipes/MigrationPipe'
import ModelPipe from './pipes/ModelPipe'
import SeederPipe from './pipes/SeederPipe'
import UserPipe from './pipes/UserPipe'
import PolicyPipe from './pipes/PolicyPipe'

import {BaseFileFactory} from '@pipe-dream/core'

import ImportAppButton from "./buttons/import";
import ImportFromInformationSchemaButton from './buttons/importFromInformationSchema'

export default class LaravelFileFactory extends BaseFileFactory{
    constructor(objectModelCollection) {
        super(objectModelCollection)
    }

    static templates() {
        return templates
    }

    static get title(){
        return "LaravelFileFactory"
    }

    static version() {
        return require('../package.json').version;
    }

    static buttons() {
        return [
            SampleAppSketchButton,
            ImportAppButton,
            ImportFromInformationSchemaButton,
        ]
    }

    static settings() {
        return [
            {
                name: "Model path",
                value: "app",
                dataType: "string",
            },
            {
                name: "Model namespace",
                value: "App",
                dataType: "string",
            },
            {
                name: "API namespace",
                value: String.raw`App\Http\Controllers\API`,
                dataType: "string",
            },
            {
                name: "API path",
                value: String.raw`app/Http/Controllers/API`,
                dataType: "string",
            },
            {
                name: "Foreign Key restraints",
                value: true,
                dataType: "boolean",
                help: "Enable foreign keys.\\nIf set to false the keys will still be generated, but you cannot set cascades etc."
            }
        ]
    }

    static pipes() {
        return [
            APIControllerPipe,
            APIResourcePipe,
            APIResourceCollectionPipe,
            APIRoutesPipe,
            ControllerPipe,
            FactoryPipe,
            MigrationPipe,
            ModelPipe,
            SeederPipe,
            UserPipe,
            PolicyPipe,
        ]
    }

    static defaultPreferences() {
        return defaultPreferences;
    }

    static userSystemSketch() {
        return userSystemSketch;
    }
}
