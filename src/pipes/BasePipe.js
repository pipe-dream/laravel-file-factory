export default class BasePipe {
    constructor(omc) {
        this.omc = omc
    }

    static with(omc) {
        return new this(omc)
    }

    static get title() {
        return this.constructor.name
    }

    horisontalStringList(names, defaultValue) {
        let result = names.map(name => {
            return "'" + name + "'"
        }).join(", ")

        return result ? result : defaultValue
    }

    modelPath() {
        return window.store.getters.settings['LaravelFileFactory']['Model path']['value']        
    }

    modelNamespace() {
        return window.store.getters.settings['LaravelFileFactory']['Model namespace']['value']        
    }
    
    apiControllerPath() {
        return window.store.getters.settings['LaravelFileFactory']['API path']['value']        
    }

    apiControllerNamespace() {
        return window.store.getters.settings['LaravelFileFactory']['API namespace']['value']        
    }    
}
