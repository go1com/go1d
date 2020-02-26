const fs = require('fs')

const iconComponents = fs.readdirSync('./src/components/Icons')

const iconsIndex = iconComponents
  .map(iconFile => {
    if (iconFile === 'index.ts') {
      return null
    }
    const name = iconFile.replace('.tsx', '')
    return `export { default as Icon${name} } from "./${name}";`
  })
  .join('\n')

fs.writeFile('./src/components/Icons/index.tsx', iconsIndex + '\n', function (
  err
) {
  if (err) {
    return console.log(err)
  }

  console.log('Icons/index.js created')
})
