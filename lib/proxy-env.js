
var fs = require('fs')
var path = require('path')
var os = require('os')
var hotUpdate = require('module-hot-update')
var config = {}
var callBack = null

function proxyEnv(filePath, config, fn) {
    if (/win/.test(os.platform())) {
        filePath = filePath.replace(/\\/g, '\/')
    }
    hotUpdate(filePath)
    fs.writeFileSync(path.join(__dirname, '../data/filePath.js'), `module.exports = "${filePath}"`)
    if (typeof config  === 'object' && typeof fn === 'function') {
        fs.writeFileSync(path.join(__dirname, '../data/config.js'), `module.exports = ${JSON.stringify(config)}`)
        fs.writeFileSync(path.join(__dirname, '../data/fn.js'), `module.exports =  ${fn.toString()}`)
    }
}

module.exports = proxyEnv;