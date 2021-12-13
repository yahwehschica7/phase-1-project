const contactForm = document.createElement("form")
contactForm.setAttribute


const baseUrl = "https://api.fbi.gov/@wanted"
function fetchApi() {
    fetch(baseUrl)
.then(res => res.json())
.then(res => console.log(res))
}

function myCat() {
    const img = new Image ()
    img.src = "https://img-9gag-fun.9cache.com/photo/aD1n89B_460s.jpg"
    img.width ="250"
    img.height = "300"
    document.getElementById("body").appendChild(img);
    const input = document.createElement("input")
    const 

    // const catDiv = document.createElement("div")

    // catDiv.innerHTML = "<p>McCormick Investigations is looking for the owner of this cat. Be advised: She bites.</p>"
    // img.appendChild(catDiv)
}
myCat()
// const contactForm = document.createElement("form"); 
// contactForm.setAttribute("type", "text");
// document.body.appendChild(contactForm);




// function allEventListeners(action) {
//     contactForm.addEventListener("submit", action)
// }




