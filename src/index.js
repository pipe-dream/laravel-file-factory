import LaravelFileFactory from './fileFactories/Laravel/FileFactory'

require('./bootstrap/extendArray')
require('./bootstrap/assignConstants')

// this way we can use the templates in pipes or where ever necessary
// let templates = require('./templates.js')

export default LaravelFileFactory;