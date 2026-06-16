import fs from 'fs'
import PDFDocument from 'pdfkit-table'
import { utilService } from './services/util.service.js' // adjust path if needed


// init document
let doc = new PDFDocument({ margin: 30, size: 'A4' })

// pipe to file
doc.pipe(fs.createWriteStream('./countries.pdf'))

createPdf(doc).then(() => doc.end())

async function createPdf(doc) {
    const countries = utilService.readJsonFile('./data/countries.json')

    // sort by country name
    countries.sort((a, b) => a.name.common.localeCompare(b.name.common))

    const table = {
        title: 'Countries',
        subtitle: 'Sorted by country name',
        headers: ['Country', 'Capital', 'Population'],
        rows: countries.map(c => [
            c.name.common,
            c.capital,
            String(c.population)
        ]),
    }

    return doc.table(table, {
        columnsSize: [200, 150, 150],
    })
}