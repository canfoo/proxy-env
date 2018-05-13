
var path = require('path')
var proxyEnv = require('../lib/proxy-env')
var p1 = require('./js/p1')

var config = [
    {
        name: 'dev',
        url: 'http://dev'
    },
    {
        name: 'test',
        url: 'http://test'
    }
]

/**
 * 
 * @param {*} val  根据选中的值从config过滤出对应的对象值
 * @param {*} content  监听文件的内容
 * @return  需要返回的新文件内容
 */
function callBack(val, content) {
    let reg = /const devUrl = ([\w\W]*?)[\r\n\s]/
    content = content.replace(reg, () => {
        return `const devUrl = '${val.url}'\n`
    })
    return content
}

proxyEnv(path.join(__dirname, './js/p1.js'), config, callBack)

setInterval(() => {
    console.log('p1', p1)
}, 1000)