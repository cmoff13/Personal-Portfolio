import { films } from '../../data/films.js'
import { people } from '../../data/people.js'

console.log("Hi there! My first JavaScript Code")


let greetingDiv = document.querySelector('.greeting')

greetingDiv.textContent = "Star Wars Cast"

let castList = document.createElement("ul")

const maleCharacters = people.filter(person => person.gender === 'male')
console.log(maleCharacters)

const femaleCharacters = people.filter(person => person.gender === 'female')
console.log(femaleCharacters)

const otherCharacters = people.filter(person => person.gender === "n/a" || person.gender === "none" || person.gender === "hermaphrodite")
console.log(otherCharacters)

let maleButton = document.querySelector('#maleButton')
let femaleButton = document.querySelector('#femaleButton')
let otherButton = document.querySelector('#otherButton')

maleButton.addEventListener('click', function(event) {
    populateDOM(maleCharacters)
})

femaleButton.addEventListener('click', function(event) {
    populateDOM(femaleCharacters)
})

otherButton.addEventListener('click', function(event) {
    populateDOM(otherCharacters)
})

let counter = 1

function populateDOM(characters) {
    
    characters.forEach(person => {
        console.log(`${person.url}`)
    let personAnchor = document.createElement("a")
    personAnchor.href = "#"
    let personImg = document.createElement("img")
    personImg.src = `https://starwars-visualguide.com/assets/img/characters/${counter}.jpg`
    
    personImg.addEventListener("error", (event) => { 
        personImg.hidden = true
    })

    personImg.addEventListener("click", function( event ) { 
        console.log("Thanks for clicking!")
    })

    personAnchor.appendChild(personImg)
    greetingDiv.appendChild(personAnchor)
    counter++
})
}




