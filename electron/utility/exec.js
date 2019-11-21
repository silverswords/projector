const { exec } = require('child_process')

function processList() {
    return new Promise((resolve, reject) => {
        let cmd = 'ps -ef'

        exec(cmd, (err, stdout, stderr) => {
            if (err) {
                reject(err)
            } else {
                resolve(stdout)
            }
        })
    })
}

module.exports = {
    processList
}
