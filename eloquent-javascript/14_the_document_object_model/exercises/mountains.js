let mountains = [
    {
        name: "Kilimanjaro",
        height: 5895,
        country: "Tanzania"
    }, {
        name: "Everest",
        height: 8849,
        country: "Nepal"
    }, {
        name: "Everest",
        height: 8849,
        country: "Nepal"
    }, {
        name: "Everest",
        height: 8849,
        country: "Nepal"
    }, {
        name: "Everest",
        height: 8849,
        country: "Nepal"
    },

]


let table = document.querySelector("#mountains")

mountains.forEach((mountain) => {
    let row = document.createElement("tr")
    let name = document.createElement("td")
    name.innerText = mountain.name
    let height = document.createElement("td")
    height.innerText = mountain.height
    height.style.textAlign = "right"
    let country = document.createElement("td")
    country.innerText = mountain.country

    row.appendChild(name)
    row.appendChild(height)
    row.appendChild(country)
    table.appendChild(row)
})

let childs = document.getElementsByTagName("tr", "body")

function retrieveArray(childs) {
    return Array.from(childs, (child => child.nodeName.toLowerCase()))
}

console.log(retrieveArray(childs))
