module.exports = {
  trailingSlash: true,
  swcMinify: false,
  exportPathMap: function () {
    return {
      '/': {page: "/"},
      '/404': {page: "/404"}
    }
  },
  images: {
    loader: "custom"
  }
};
