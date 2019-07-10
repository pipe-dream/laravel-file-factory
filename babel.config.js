module.exports = function(api) {
  api.cache(true);

  const plugins = [
    [
      "transform-es2015-modules-commonjs"
    ],
    ["module-resolver", {
      "root": ["./src"],
      "alias": {
        "test": "./test"
      }
    }]
  ];
  return {plugins};
};
