const withSourceMaps = require('@zeit/next-source-maps')

module.exports = withSourceMaps({
  webpack(config, options) { // eslint-disable-line no-unused-vars
    return config
  },
})
