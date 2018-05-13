module.exports =  (value, content) => {
    console.log('value', value)
    return `module.exports = {a: "${value}"};`
}