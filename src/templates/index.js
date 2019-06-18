// Dynamically load all stubs using raw-loader (see webpack.mix.js)
// let stubs = require.context('./', true, /\.stub$/i);

// // What is this new "exports" thing ???
// stubs = stubs.keys().reduce((result, key) => {
//     return {
//         [key.replace(/\.\//,'').replace(/\.stub$/,'')] : stubs(key).default,
//         ...result
//     }
// }, {});

// export default { /* dont remove this export default or it will break !?? */}

//module.exports = "wohohoo" 

export default {
    "User.php": "User file content"
}