import { starships } from '../data/starships.js'
import { removeChildren, getLastNumber } from '../utils.js'

const nav = document.querySelector('.nav')

const navList = document.querySelector('.navList')

const shipView = document.querySelector('#main')

function populateNav(starships) {
    starships.forEach(starships => {
        let shipAnchor = document.createElement('a')
        shipAnchor.href = '#'
        let listItem = document.createElement('li')
        listItem.textContent = starships.name

        shipAnchor.addEventListener('click', event => {
            // Store the name of the list item clicked on
            let shipName = event.target.textContent
            const foundShip = starships.find(ship => ship.name === shipName)
            populateShipView(foundShip)
        })

        shipAnchor.appendChild(listItem)
        navList.appendChild(shipAnchor)

    })
    nav.appendChild(navList)
}

function populateShipView(shipData) {
    removeChildren(shipView)
    let imageNum = getLastNumber(shipData.url)
    let shipImage = document.createElement('img')
    shipImg.src = `https://starwars-visualguide.com/assets/img/starships/${imageNum}.jpg`
    shipView.appendChild(shipImage)
}

populateNav(starships)