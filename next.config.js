// next.config.js
module.exports = {
    reactStrictMode: true,
    assetPrefix: process.env.NODE_ENV === 'production' ? '/my-cv' : '', // Замените 'my-cv' на имя вашего репозитория
    basePath: process.env.NODE_ENV === 'production' ? '/my-cv' : '',     // Замените 'my-cv' на имя вашего репозитория
    trailingSlash: true, 
    images: {
      unoptimized: true, 
    },
  }