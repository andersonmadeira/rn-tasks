module.exports = function configBabel(api) {
  api.cache(true)
  return {
    presets: ['babel-preset-expo'],
  }
}
