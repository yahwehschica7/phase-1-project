





const baseUrl = "https://api.fbi.gov/@wanted"
function fetchApi() {
    fetch(baseUrl)
.then(res => res.json())
.then(res => console.log(res))
}


// const contactForm = document.createElement("form"); 
// contactForm.setAttribute("type", "text");
// document.body.appendChild(contactForm);




// function allEventListeners(action) {
//     contactForm.addEventListener("submit", action)
// }




