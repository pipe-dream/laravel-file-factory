import { SketchButton } from '@pipe-dream/core'
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
