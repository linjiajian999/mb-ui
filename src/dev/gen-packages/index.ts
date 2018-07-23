import * as fs from 'fs'
import * as path from 'path'

import components from './components-list'
import genComponent, { genComponentLink } from './gen-component'
import genDemo, { genDemoLink } from './gen-demo'

const packagePath = './src/packages'
const packageIndexPath = './src/packages/index.ts'
const demoPath = './src/views/demo'
const demoIndexPath = './src/views/demo/index.ts'

const getExistComponents = () => {
  const packageList = fs.readdirSync(packagePath)
  console.log(packagePath)
  packageList.filter(componetName => {
    const stats = fs.statSync(path.resolve(packagePath, componetName))
    if (!stats.isDirectory()) return false
    return true
  })
  return packageList
}

export default () => {
  const existComponets = getExistComponents()
  components.forEach(componentName => {
    if (existComponets.indexOf(componentName) >= 0) return
    console.log(`gen ${componentName}`)
    genComponent(componentName, packagePath)
    genComponentLink(packageIndexPath)
    genDemo(componentName, demoPath)
    genDemoLink(demoIndexPath)
  })
}