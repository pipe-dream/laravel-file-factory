import {SketchButton, Schema} from '@pipe-dream/core'
import * as pluralize from 'pluralize'

export default class ImportFromInformationSchemaButton extends SketchButton {
    constructor() {
        super()
    }

    static name() {
        return "Import from Information Schema (beta)"
    }

    static click() {
        fetch('/pipe-dream/api/importFromInformationSchema')
            .then(res => res.text())
            .then(data => {
                window.store.dispatch('setSketch', Schema.sketch + '\r\n\r\n' + data)
            })
    }
}
