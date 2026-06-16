import fs from "fs"
import ms from "ms"

const content = fs.readFileSync('./data/timestamps.txt', 'utf8')
const timestamps = content.split(/\r?\n/)

timestamps.forEach((stamp) => {
    console.log(ms(Number(stamp), { long: true }))
})