// next.config.js
module.exports = {
    reactStrictMode: true,
    assetPrefix: '/my-cv', // Замените 'my-cv' на имя вашего репозитория
    basePath: '/my-cv',     // Замените 'my-cv' на имя вашего репозитория
    trailingSlash: true, 
    images: {
      unoptimized: true, 
    },
    output: "export",
  }