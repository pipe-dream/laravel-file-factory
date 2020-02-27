const context = require.context('./', true, /\.(stub)$/);

const templates = {};
const hashMap = {}
context.keys().forEach((filename)=>{
  const fileKey = filename.substring(2, filename.length - 5)
  templates[fileKey] = context(filename).default;
    hashMap[fileKey] = hashCode(context(filename).default)
});

function hashCode (input) {
    let hash = 0, i, chr;
    if (input.length === 0) return hash;
    for (i = 0; i < input.length; i++) {
        chr   = input.charCodeAt(i);
        hash  = ((hash << 5) - hash) + chr;
        hash |= 0; // Convert to 32bit integer
    }
    return hash;
};
export const templateHash = hashMap
export default templates;
