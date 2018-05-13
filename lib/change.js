
var fs = require('fs')
var prompt = require('prompts')
var config = require('../data/config')
var fn = require('../data/fn')
var fileParh = require('../data/filePath')

function change() {
    const questions = [
        {
            type: 'select',
            name: 'value',
            message: '请选择本地代理的环境',
            choices: config
        }
    ];
    prompt(questions).then((answers) => {
        var content = fs.readFileSync(fileParh, 'utf-8')
        var newContent = fn(answers.value, content)
        if (!newContent) newContent = content
        fs.writeFileSync(fileParh, newContent)
    })
}

change()