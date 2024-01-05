const path = require('path')

module.exports = {
    port: 9000,
    publicPath: 'web',
    proxy: {
        'api': {
            target: 'http://ip:9999',
            changeOrigin: true
        }
    },
    alias: {
        '@': path.resolve(__dirname, 'src')
    }
}