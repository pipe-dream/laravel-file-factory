import { SketchButton } from 'core'
import sampleAppSketch from '../../sketches/sampleAppSketch'

export default class SampleAppSketchButton extends SketchButton {
    static name() {
        return "sample app"
    }

    static click() {
        window.store.dispatch('setSketch', sampleAppSketch)
    }    
}