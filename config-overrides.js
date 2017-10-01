var path = require('path');

module.exports = (config, env) => {
    config.resolve.modules.push('src')
    return config
}