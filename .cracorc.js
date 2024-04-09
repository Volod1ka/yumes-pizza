const path = require('path')

const resolvePath = alias => path.resolve(__dirname, `src/${alias}`)

module.exports = {
  webpack: {
    alias: {
      '@api': resolvePath('common/api'),
      '@assets': resolvePath('assets'),
      '@components': resolvePath('components'),
      '@hooks': resolvePath('common/hooks'),
      '@mocks': resolvePath('mocks'),
      '@models': resolvePath('common/models'),
      '@routes': resolvePath('routes'),
      '@stores': resolvePath('common/stores'),
      '@tools': resolvePath('common/tools'),
    },
  },
}
