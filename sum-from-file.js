import fs from "fs"


sumFromFile('data/nums.txt')
    .then(sum => console.log('Sum:', sum))
    .catch(err => console.log('Cannot sum:', err))

function sumFromFile(filePath) {
    return new Promise((resolve, reject) => {
        fs.readFile(filePath, 'utf8', (err, data) => {
            if (err)
                return reject(err)

            const sum = data
                .split(/\r?\n/)
                .reduce((acc, num) => acc + (+num), 0)

            resolve(sum)
        })
    })
}