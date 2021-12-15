const contactButton = document.getElementById("button")
const submitButton = document.getElementById("submit")
const baseUrl = "https://api.fbi.gov/@wanted"
document.querySelector("#api").innerHTML = "<p>Lost Cat. Please contact if owner is known. Warning: She bites.</p>"


const fetchApi = () => {
fetch(baseUrl)
.then(res => res.json())
// .then(data => console.log(data.items.map(renderWanted)))
.then(data => console.log(data.items))
    // const renderToDom = data.items.images.map(image => {
    //     return `<p>Face: ${image.images}</p>`})
    //     console.log(renderToDom)
    }

    
// .catch(error => console.log(error))


const myCat = () => {
    const img = new Image ()
    img.src = "https://img-9gag-fun.9cache.com/photo/aD1n89B_460s.jpg"
    img.width ="250"
    img.height = "300"
    document.getElementById("main").appendChild(img); 
}

function thankYou() {
    alert("Thank you for choosing McCormick Investigations. We will contact you within 24 hours.")
}

// const renderWanted = () => {

// }

function allEventListeners() {
    submitButton.addEventListener("submit", thankYou())
}
    
    


myCat()
fetchApi()
allEventListeners()



