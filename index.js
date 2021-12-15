
let submitButton = document.getElementById("submit")
submitButton.addEventListener("submit", thankYou())

const baseUrl = "https://api.fbi.gov/@wanted"


const fetchApi = () => {
fetch(baseUrl)
.then(res => res.json())
.then(res => console.log(res))
}

const myCat = () => {
    const img = new Image ()
    img.src = "https://img-9gag-fun.9cache.com/photo/aD1n89B_460s.jpg"
    img.width ="250"
    img.height = "300"
    document.getElementById("main").appendChild(img); 
}

function thankYou() {
    console.log("Thank you for choosing McCormick Investigations. We will contact you within 24 hours.")
}




myCat()
fetchApi()

// const contactForm = document.createElement("form"); 
// contactForm.setAttribute("type", "text");
// document.body.appendChild(contactForm);




// function allEventListeners(action) {
//     contactForm.addEventListener("submit", action)
// }

// const contactForm = document.createElement("form")
// contactForm.setAttribute



