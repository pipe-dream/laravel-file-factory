var context = require.context('./', true, /\.(stub)$/);

var templates = {};
context.keys().forEach((filename)=>{
  var fileKey = filename.substring(2, filename.length - 5)
  templates[fileKey] = context(filename).default;
});

export default templates;