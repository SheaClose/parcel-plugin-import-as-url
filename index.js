const Bundler = require("parcel-bundler");

module.exports = bundler => {
  bundler.addAssetType("as-url", require.resolve("./AsURLAsset.js"));
};
