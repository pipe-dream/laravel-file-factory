const mix = require('laravel-mix');
const fs = require('fs');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.webpackConfig({
  target: 'node',
  output: { // make our template globally importable
    library: 'compiledTemplates',
    libraryTarget: 'umd',    
    umdNamedDefine: true
  },
  module: {
    rules: [
      {
        test: /\.stub$/i,
        use: 'raw-loader',
      },
      { 
        test: require.resolve("./src/templates/index.js"), 
        use: [{
            loader: 'expose-loader',
            options: 'template'
        }] 
      },
    ],
  },
});

mix.js('src/templates/index.js', 'src/templates/compiledTemplates.js')