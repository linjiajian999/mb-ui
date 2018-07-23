import * as fs from 'fs'
import * as path from 'path'

import camerlize from '../camerlize'
import { components } from './components-list'

const demoTplPath = './src/dev/gen-packages/tpl/demo/component.vue.tpl'

export const genDemoLink = (indexPath: string) => {
  let indexStr = fs.readFileSync(indexPath).toString()

  let importStr = '\n'
  let routerStr = '\n'
  components.forEach(componentName => {
    const camerlizeName = camerlize(componentName)
    const componentNameUpper = camerlizeName[0].toLocaleUpperCase() + camerlizeName.substring(1)
    importStr += `const ${componentNameUpper} = () =>  import(/* webpackChunkName: "demo" */ './${componentName}.vue')\n`
    routerStr += '  {\n'
     + `    path: '/demo/${componentName}',\n`
     + `    name: 'demo-${componentName}',\n`
     + `    component: ${componentNameUpper},\n`
     + `    meta: { title: '${componentName}' }\n`
     + '  },\n'
  })

  const importSatrt = indexStr.indexOf('// import start') + '// import start'.length
  const importEnd = indexStr.indexOf('// import end')
  const linkStart = indexStr.indexOf('// demo link start') + '// demo link start'.length
  const linkEnd = indexStr.indexOf('// demo link end')

  const writeStr = indexStr.substring(0, importSatrt)
    + importStr
    + indexStr.substring(importEnd, linkStart)
    + routerStr
    + indexStr.substring(linkEnd, indexStr.length)
  fs.writeFileSync(indexPath, writeStr)
}
export default (componentName: string, parentPath: string) => {
  const demoPath = path.resolve(parentPath, `${componentName}.vue`)
  const camerlizeName = camerlize(componentName)
  const componentNameUpper = camerlizeName[0].toLocaleUpperCase() + camerlizeName.substring(1)

  let str = fs.readFileSync(demoTplPath).toString()
  str = str.replace(/__componentName__/g, componentName)
  str = str.replace(/__ComponentName__/g,  componentNameUpper)

  fs.writeFileSync(demoPath, str)
}