import * as fs from 'fs'
import * as path from 'path'

const componentTplPath = './src/dev/gen-packages/tpl/component'

const camerlize = (str: string) => {
  const reg = /-(\w)/g
  return str.replace(reg, (_, replce: string) =>{
    return replce
      ? replce.toLocaleUpperCase()
      : ''
  })
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