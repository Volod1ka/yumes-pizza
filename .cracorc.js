const path = require('path')

const resolvePath = alias => path.resolve(__dirname, `src/${alias}`)

module.exports = {
  webpack: {
    alias: {
      '@assets': resolvePath('assets'),
      '@components': resolvePath('components'),
      '@mocks': resolvePath('mocks'),
      '@models': resolvePath('common/models'),
      '@routes': resolvePath('routes'),
      '@stores': resolvePath('common/stores'),
      '@tools': resolvePath('common/tools'),
    },
  },
}
