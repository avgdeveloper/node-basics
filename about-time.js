import fs from "fs"
import ms from "ms"

aboutTime()
    .then(() => console.log("after calling aboutTime"))
    .catch(err => console.log(err))

function aboutTime() {
    return new Promise((resolve, reject) => {
        fs.readFile('./data/timestamps.txt', 'utf8', (err, contents) => {
            if (err) return reject(err)
            const timestamps = contents.split(/\r?\n/)
            timestamps.forEach((timestamp) => { console.log(ms(Number(timestamp), { long: true })) })
            resolve()
        })
    })
}
