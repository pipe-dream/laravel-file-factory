require('./bootstrap/extendArray')
require('./bootstrap/assignConstants')

// this way we can use the templates in pipes or where ever necessary
let templates = require('./templates.js')
console.log(templates.stubs)

exports.text = "someText"