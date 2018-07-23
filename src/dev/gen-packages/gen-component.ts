import * as fs from 'fs'
import * as path from 'path'

import camerlize from '../camerlize'
import { components } from './components-list'

const componentTplPath = './src/dev/gen-packages/tpl/component'
export const genComponentLink = (indexPath: string) => {
  const indexStr = fs.readFileSync(indexPath).toString()

  let importStr = '\n'
  let exportStr = '\n'

  components.forEach(componentName => {
    const camerlizeName = camerlize(componentName)
    const componentNameUpper = camerlizeName[0].toLocaleUpperCase() + camerlizeName.substring(1)
    importStr += `import ${componentNameUpper} from './${componentName}'\n`
    exportStr += `  ${componentNameUpper},\n`
  })

  const importSatrt = indexStr.indexOf('// import start') + '// import start'.length
  const importEnd = indexStr.indexOf('// import end')
  const exportStart = indexStr.indexOf('// export start') + '// export start'.length
  const exportEnd = indexStr.indexOf('// export end')

  const writeStr = indexStr.substring(0, importSatrt)
    + importStr
    + indexStr.substring(importEnd, exportStart)
    + exportStr
    + indexStr.substring(exportEnd, indexStr.length)
  fs.writeFileSync(indexPath, writeStr)
}
export default (componentName: string, parentPath: string) => {
  const componentPath = path.resolve(parentPath, componentName)
  const camerlizeName = camerlize(componentName)
  const componentNameUpper = camerlizeName[0].toLocaleUpperCase() + camerlizeName.substring(1)
  fs.mkdirSync(componentPath)
  const tplList = fs.readdirSync(componentTplPath)
  tplList.forEach(tpl => {
    const tplPath = path.resolve(componentTplPath, tpl)

    let fileName = tpl
    if (tpl === 'component.vue') {
      fileName = `${componentName}.vue`
    }
    const filePath = path.resolve(parentPath, `${componentName}/${fileName}`)
    const tplBuf = fs.readFileSync(tplPath)
    let str = tplBuf.toString().replace(/__componentName__/g, componentName)
    str = str.replace(/__ComponentName__/g,  componentNameUpper)
    fs.writeFileSync(filePath, str)
  })
}