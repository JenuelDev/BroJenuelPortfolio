module.exports = {
  "transpileDependencies": [
    "vuetify"
  ],
  pwa: {
    name: 'BroJenuel',
    themeColor: '#64ffda',
    msTileColor: '#0a192f'
  },
  configureWebpack: {
    output: {
        crossOriginLoading: 'use-credentials'
    }
  }
}