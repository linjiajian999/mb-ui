import * as fs from 'fs'
import * as path from 'path'

import components from './components-list'
import genComponent from './gen-component'

const packagePath = './src/packages'

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
  })
}