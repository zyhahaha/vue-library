module.exports = {
  publicPath: './',
  devServer: {
    port: 8080, // can be overwritten by process.env.PORT, if port is in use, a free one will be determined
    proxy: {
      '/api': {
        target: 'http://localhost:8088',
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  }
};
