


// need a nav bar, sidebars, footers



// const h1 = document.querySelector("h1")
// const h2 = document.createElement("h2")
// h1.append("h2")
// h2.innerText = "The Truth shall set you free"
// const p = document.createElement("p")
// p.innerText = "The truth shall set you free."
// h1.appendChild("p")

const baseUrl = "https://api.fbi.gov/@wanted"
function fetchApi() {
    fetch(baseUrl)
.then(res => res.json())
.then(res => console.log(res))
}

function myCat() {
    const img = new Image ()
    img.src = "https://img-9gag-fun.9cache.com/photo/aD1n89B_460s.jpg"
    document.getElementById("body").appendChild(img);
    
}
// const contactForm = document.createElement("form"); 
// contactForm.setAttribute("type", "text");
// document.body.appendChild(contactForm);




// function allEventListeners(action) {
//     contactForm.addEventListener("submit", action)
// }




