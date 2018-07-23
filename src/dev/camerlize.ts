export default (str: string) => {
  const reg = /-(\w)/g
  return str.replace(reg, (_, replce: string) =>{
    return replce
      ? replce.toLocaleUpperCase()
      : ''
  })
}
