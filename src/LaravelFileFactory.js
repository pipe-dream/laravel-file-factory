
import defaultPreferences from './preferences/defaultSchema'
import userSystemSketch from './sketches/userSystemSketch'
import collect from 'collect.js'
import SampleAppSketchButton from './utilities/sketchButtons/SampleApp'

import templates from './templates/compiledTemplates'

const pipes = require.context('./pipes', false, /\.js$/);

export default class LaravelFileFactory {
    constructor(objectModelCollection) {
        this.omc = objectModelCollection
    }

    static get title() {
        return "Laravel"
    }

    static templates() {
        return templates
    }

    static buttons() {
        return [
            SampleAppSketchButton
        ]
    }

    static settings() {
        return [
            {
                name: "Models namespace",
                default: "App",
                dataType: String,
            },
            {
                name: "API namespace",
                default: String.raw`App\Http\Controllers\API`,
                dataType: String,
            }            
        ]
    }

    static pipes() {
        //return pipes.keys().filter(key => !key.includes('BasePipe')).map(key => pipes(key).default)

        return [
             pipes("./UserPipe.js").default,
        //     pipes("./ModelPipe.js").default,
        //     pipes("./MigrationPipe.js").default,
        //     pipes("./ControllerPipe.js").default,
        //     pipes("./APIControllerPipe.js").default,
        //     pipes("./SeederPipe.js").default,            
        //     pipes("./FactoryPipe.js").default,                        
        //     pipes("./APIRoutesPipe.js").default,            
        ]
    }

    static defaultPreferences() {
        return defaultPreferences;
    }

    static userSystemSketch() {
        return userSystemSketch;
    }    

    static from(objectModelCollection) {
        return new this(objectModelCollection)
    }

    withPipes(pipes) {
        this.pipes = pipes
        return this
    }

    calculateFiles() {
        return collect(this.pipes.map(pipe => {
            return pipe.with(this.omc).calculateFiles(this.omc)
        }).reduce((pipeFileList, allFiles) => {
            return allFiles.concat(pipeFileList)
        }, [])).sortBy('path').toArray();
    }
}