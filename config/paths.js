const path = require('path')

const res = dir => path.resolve(__dirname, '..', dir)

module.exports = {
  src: res('src'),
  dist: res('dist'),
  pub: res('public'),
}
