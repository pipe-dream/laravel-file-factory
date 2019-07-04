const ARGS_START_MARKER = ":"
const ARGS_DELIMITER = ","

/* this is a dummy module for testing overriding the default modules
*  it will probably not be prefixed with Laravel later
*  but lets do that for clarity anyway */
export default class LaravelSegmentRow {
    constructor(raw) {
        let parts = raw.split(ARGS_START_MARKER)

        this.name = parts[0]
        this.args = parts.slice(1)
            .join()
            .split(ARGS_DELIMITER)
            .filter(arg => arg.trim())
            .map(arg => arg.trim())
    }
}