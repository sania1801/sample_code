const withSourceMaps = require('@zeit/next-source-maps')

module.exports = withSourceMaps({
  webpack(config, options) { // eslint-disable-line no-unused-vars
    return config
  },
  env: {
    baseUrl: process.env.NEXT_PUBLIC_BASE_URL,
  },
})
