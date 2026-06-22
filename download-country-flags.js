import { utilService } from './services/util.service.js'

downloadCountryFlags()

function downloadCountryFlags() {
    const countries = getCountries()

    console.log(
        'Countries:',
        countries.map(c => c.name.common)
    )

    downloadFlags(countries)
        .then(() => {
            console.log('Your flags are ready')
        })
        .catch(err => {
            console.log('Cannot download flags:', err)
        })
}

function getCountries() {
    const countries = utilService.readJsonFile('./data/countries.json')
    countries.sort((a, b) => b.population - a.population)
    return countries.slice(0, 5)
}

function downloadFlags(countries) {
    const prms = countries.map(country => {
        return utilService.download(
            country.flags.png,
            `flags/${country.name.common}.png`
        )
    })

    return Promise.all(prms)
}