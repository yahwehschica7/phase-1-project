
const mainDiv = document.getElementById("main")
const baseUrl = "https://api.fbi.gov/@wanted"
const previousButton = document.getElementById("previous")
const nextButton = document.getElementById("next")
const imgContainer = document.getElementById("container")
const form = document.getElementById("form")
let criminals = []
let index = 0
 
window.addEventListener("DOMContentLoaded", (e) => {
    form.addEventListener("submit", thankYou)
    fetchApi()
    myCat()
    clickNextButton()
    clickPreviousButton()

})

const fetchApi = () => {
fetch(baseUrl)
.then(res => res.json())
.then(data => {
    criminals = data.items
    console.log(criminals)
    renderImage(index)
    })
}     

const renderImage = index => {
   const img = new Image ()
   img.src = criminals[index].images[0].large
   img.width ="250"
   img.height = "300"
   imgContainer.innerHTML = "<p>Have you seen this person? Contact me!</p>" 
   imgContainer.appendChild(img); 
 }      
    
const myCat = () => {
    const img = new Image ()
    img.src = "https://img-9gag-fun.9cache.com/photo/aD1n89B_460s.jpg"
    img.width ="250"
    img.height = "300"
    mainDiv.appendChild(img); 
    document.querySelector("#catnews").innerHTML = 
        "<p>Lost Cat. Please contact<br> if you have info.<br> Warning: She bites.</p>"
}

function thankYou(e) {
    e.preventDefault()
    alert("Thank you for choosing McCormick Investigations. We will contact you within 24 hours.")
    e.target.reset()
}

const clickNextButton = () => {
    nextButton.addEventListener("click", () => {
    renderImage(++index)
    })
}  
       
const clickPreviousButton = () => {
    previousButton.addEventListener("click", () => {
    renderImage(--index)
    })
}
   
    

