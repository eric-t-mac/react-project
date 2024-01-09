const path = require('path')

module.exports = {
    port: 9000,
    publicPath: 'web',
    proxy: {
        '/splcloud': {
            target: 'https://c.y.qq.com',
            changeOrigin: true
        },
    },
    alias: {
        '@': path.resolve(__dirname, 'src')
    }
}