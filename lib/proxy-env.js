
var fs = require('fs')
var path = require('path')
var hotUpdate = require('module-hot-update')
var config = {}
var callBack = null

function proxyEnv(filePath, config, fn) {
    hotUpdate(filePath);
    fs.writeFileSync(path.join(__dirname, '../data/filePath.js'), `module.exports = "${filePath}"`)
    if (typeof config  === 'object' && typeof fn === 'function') {
        fs.writeFileSync(path.join(__dirname, '../data/config.js'), `module.exports = ${JSON.stringify(config)}`)
        fs.writeFileSync(path.join(__dirname, '../data/fn.js'), `module.exports =  ${fn.toString()}`)
    }
}

module.exports = proxyEnv;