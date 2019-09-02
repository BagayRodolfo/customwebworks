const path = require('path')

module.exports = {
  components: 'src/components/**/[A-Z]*.vue',
  simpleEditor: true,
  renderRootJsx: path.join(__dirname, 'config/styleguide.root.js'),
  usageMode: 'expand',
  styleguideDir: 'dist',
  ribbon: {
    text: 'Back to examples',
    url: 'https://vue-styleguidist.github.io/Examples.html'
  },
  getComponentPathLine (componentPath) {
    const name = path.basename(componentPath)
    const vname = name.split('.')
    return `import ${vname[0]} from '@/components/${name}';`
  }
}
