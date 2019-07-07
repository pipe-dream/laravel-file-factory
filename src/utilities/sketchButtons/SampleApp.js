import { SketchButton } from 'core'

export default class SampleAppSketchButton extends SketchButton {
    static name() {
        return "sample app"
    }

    static click() {
        return alert("Add the sample app!")
    }    
}