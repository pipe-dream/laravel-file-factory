import { SketchButton } from '@pipe-dream/core/dist/pipe-dream.js'
import sampleAppSketch from '../../sketches/sampleAppSketch'

export default class SampleAppSketchButton {
    constructor(){
        //super()
    }
    static name() {
        return "sample app"
    }

    static click() {
        window.store.dispatch('setSketch', sampleAppSketch)
    }
}
