
const submitButton = document.getElementById("submit")
const mainDiv = document.getElementById("main")
const baseUrl = "https://api.fbi.gov/@wanted"
 

window.addEventListener("DOMContentLoaded", (e) => {
    submitButton.addEventListener("click", thankYou)
    fetchApi()
    myCat()
})

const fetchApi = () => {
fetch(baseUrl)
.then(res => res.json())
.then(data => {
    
    data.items.forEach(wanted => {
      renderImage(wanted)
})
 
   
})
}  
 function renderImage(item) {
    const img = new Image ()
    img.src = item.images[0]["large"]
    img.width ="250"
    img.height = "300"
    mainDiv.appendChild(img); 
    // for each image or map, loop over and render to dom. create image tag for each loop.
    // drill down to 
 }   
  
// need to render api images to dom. Need help.
 
const myCat = () => {
    const img = new Image ()
    img.src = "https://img-9gag-fun.9cache.com/photo/aD1n89B_460s.jpg"
    img.width ="250"
    img.height = "300"
    mainDiv.appendChild(img); 
    
    document.querySelector("#api").innerHTML = "<p>Lost Cat. Please contact if owner is known. Warning: She bites.</p>"
}

    function thankYou() {
        alert("Thank you for choosing McCormick Investigations. We will contact you within 24 hours.")
    }

    
   
    // only want submit form to load when button is clicked. Need help.

