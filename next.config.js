const withSass = require('@zeit/next-sass')
const withPlugins = require('next-compose-plugins');

module.exports = withPlugins([
    [{
        target: 'serverless'
        }],
    [withSass, {
        webpack(config, options) {
            return config
        }
    }]
])
