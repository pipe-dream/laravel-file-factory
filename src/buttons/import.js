import {SketchButton} from '@pipe-dream/core'
import * as pluralize from 'pluralize'

export default class ImportAppButton extends SketchButton {
    constructor() {
        super()
    }

    static name() {
        return "Import from Laravel"
    }

    static click() {
        fetch('/pipe-dream/api/import')
            .then(res => res.json())
            .then(data => {
                window.store.dispatch('setSketch', this.resolveApp(data))
            })
    }

    static resolveApp(data) {
        let sketch = ""

        data.forEach(table => {
            console.log(table[1])

            if (table[0][0].indexOf('_') === -1) {
                table[0][0] = pluralize.singular(table[0][0].charAt(0).toUpperCase() + table[0][0].slice(1))
            } else {
                table[0][0] = table[0][0].toLowerCase()
            }

            sketch += table[0][0] + "\n"
            if (table[1])
                sketch += Object.values(table[1]).join("\n")
            sketch += "\n\n"
        })

        return sketch
    }
}
