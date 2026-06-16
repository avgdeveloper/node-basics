import { utilService } from "./util.service.js"

global.baba = '***BABA***'

const pets = utilService.readJsonFile('data/pet.json')
console.log(' pets:', pets)

export const petService = {
    sayHello,
    getAns,
    getPets,
    addPet
}


function addPet() {
    const newPet = { name: 'Yoyo Bigel', score: 88 }
    pets.push(newPet)
    return utilService.writeJsonFile('data/pet.json', pets)
}


function getPets() {
    return pets
}


function sayHello() {
    console.log('Hello!')
}


function getAns() {
    return utilService.httpGet('https://yesno.wtf/api')
}


