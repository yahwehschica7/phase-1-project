const baseUrl = "https://api.fbi.gov/@wanted"

fetch(baseUrl)
.then(res => res.json())
.then(res => console.log(res))


const card = document.createElement("div")
card.style = "blue"