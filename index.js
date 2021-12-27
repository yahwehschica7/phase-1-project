
const submitButton = document.getElementById("submit")
const mainDiv = document.getElementById("main")
const baseUrl = "https://api.fbi.gov/@wanted"
const previousButton = document.getElementById("previous")
const nextButton = document.getElementById("next")
const imgContainer = document.getElementById("container")
let imgCaption = document.querySelector("#container")
// let criminals = []
// let index = 0
 

window.addEventListener("DOMContentLoaded", (e) => {
    submitButton.addEventListener("click", thankYou)
    fetchApi()
    myCat()
})

const fetchApi = () => {
fetch(baseUrl)
.then(res => res.json())
.then(data => {
    criminals = data.items
    criminals.forEach(data => {
        renderImage(data)
    }) 
   
})
}

    // need help with render image so that only one image appears   

 const renderImage = index => {
    // imgCaption.innerHTML = " "   
    const img = new Image ()
    img.src = index.images[1]["large"]
    img.width ="250"
    img.height = "300"
    imgCaption.innerHTML = "<p>Most Wanted</p>" 
    imgContainer.appendChild(img); 
 }   
//  renderImage needs to loop through array somehow 

const myCat = () => {
    const img = new Image ()
    img.src = "https://img-9gag-fun.9cache.com/photo/aD1n89B_460s.jpg"
    img.width ="250"
    img.height = "300"
    mainDiv.appendChild(img); 
    document.querySelector("#catnews").innerHTML = 
        "<p>Lost Cat. Please contact<br> if you have info.<br> Warning: She bites.</p>"
}

    function thankYou() {
        alert("Thank you for choosing McCormick Investigations. We will contact you within 24 hours.")
    }

    const clickNextButton = () => {
        nextButton.addEventListener("click", () => {
            renderImage(++imgCaption)
            //need help making buttons work
        })
    }

    const clickPreviousButton = () => {
        previousButton.addEventListener("click", () => {
            renderImage(--imgCaption)
        })
    }
   
    

