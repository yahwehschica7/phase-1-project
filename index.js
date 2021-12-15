const contactButton = document.getElementById("button")
const submitButton = document.getElementById("submit")
const baseUrl = "https://api.fbi.gov/@wanted"

const fetchApi = () => {
fetch(baseUrl)
.then(res => res.json())
.then(data => console.log(data.items))
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



function allEventListeners() {
    submitButton.addEventListener("submit", thankYou())
}
    
    


myCat()
fetchApi()
allEventListeners()



