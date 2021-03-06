# McCormick Investigations Webpage

McCormick Investigations is a single page application (SPA) created to showcase my fictional character's private detective business. The page includes a contact form, a picture of the lost cat Rachel McCormick is taking care of, and images of the FBI's Most Wanted that a page visitor can look at using next and previous buttons. 

## Links Used

Used CSS from materialize (https://materializecss.com/) to create the color and style of the page. This is found in the html file.
The picture of the cat is pulled from https://img-9gag-fun.9cache.com/photo/aD1n89B_460s.jpg. This link is located in the js file. 
The images of wanted criminals is pulled from a public API located at https://api.fbi.gov/@wanted. The api link is found in the js file.

## Required Code

HTML, CSS, and JavaScript
The project includes an index.html file that loads an index.js file. The CSS is pulled from materializecss.com 

## Functionality
1. In the index.html file, create html to hold a nav bar for the title of the page, a contact form with a submit button to contact the fictional character's business, and several divs below the form to hold innerHTML, images, and the fetched api. 

2. In the index.js file, there are several constants used to place the form, the button, and the images on to the DOM. The functions create interactivity. There are four event listeners. One is DOM Content Loaded. The other two are the previous and next buttons, which flip through the images of the FBI's top twenty most wanted. The fourth event listener is connected to the form content, and calls the thankYou function when a user clicks the submit button on the contact form.
