
var path = require('path')
var proxyEnv = require('../lib/proxy-env')
var p1 = require('./js/p1')

proxyEnv(path.join(__dirname, './js/p1.js'), [
    {
        title: 'dev',
        value: 'dev'
    },
    {
        title: 'test',
        value: 'test'
    }
], (value, content) => {
    console.log('value', value)
    return `module.exports = {a: "${value}"};`
})

setInterval(() => {
    console.log('p1', p1)
}, 1000)