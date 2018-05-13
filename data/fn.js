module.exports =  function callBack(val, content) {
    let reg = /const devUrl = ([\w\W]*?)[\r\n\s]/
    content = content.replace(reg, () => {
        return `const devUrl = '${val.url}'\n`
    })
    return content
}