module.exports = {
    devServer: {
        host: 'localhost',
        port:8080,
        proxy:{
            '/mock': {
                target: 'http://localhost:8080'
            }
        }
    }
}