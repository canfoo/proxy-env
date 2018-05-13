
var fs = require('fs')
let chalk = require('chalk')
var Radio = require('prompt-radio');
var config = require('../data/config')
var fn = require('../data/fn')
var fileParh = require('../data/filePath')

var choices = config.map(function(item) {
    return item.name
})

function change() {
    var prompt = new Radio({
        name: 'proxy-env',
        message: '请选择本地代理的环境',
        choices: choices
    });
    prompt.run().then((answers) => {
        if (!answers) {
            console.log(chalk.red('未选中某个环境，请选择对应的环境'))
            return  
        }
        var content = fs.readFileSync(fileParh, 'utf-8')
        var val = config.filter(function(item) {
            return item.name === answers
        })
        var newContent = fn(val[0], content)
        if (!newContent) newContent = content
        fs.writeFileSync(fileParh, newContent)
        console.log(`${chalk.yellow('代理环境切换成功，当前环境为：')}${chalk.yellow.bold(answers)}`)
    })
}

change()