import fs from "fs"

function sumFromFile(filePath) {
    return new Promise((resolve, reject) => {
        fs.readFile(filePath, 'utf8', (err, data) => {
            if (err)
                return reject(err)

            const sum = data
                .split(/\r?\n/)
                .map(Number)
                .reduce((acc, num) => acc + num, 0)

            resolve(sum)
        })
    })
}

sumFromFile('data/nums.txt')
    .then(sum => console.log('Sum:', sum))
    .catch(err => console.log('Cannot sum:', err))