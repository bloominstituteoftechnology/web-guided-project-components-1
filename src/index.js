// TASK 0- Motivate demoing a small makeImage component
//  that takes an { imgURL } and returns an img element.
//  Then loop over these URLs making images as you go:
const imageData = [
  { imageURL: 'https://images.dog.ceo/breeds/mastiff-tibetan/n02108551_978.jpg' },
  { imageURL: 'https://images.dog.ceo/breeds/mastiff-bull/n02108422_3398.jpg' },
  { imageURL: 'https://images.dog.ceo/breeds/mastiff-bull/n02108422_2947.jpg' },
]

// this is our component!
// a function that takes raw data

// const { this } = myObject - { this } must be same as actual key
                  // props destructuring
const makeImage = ({ imageURL }) => {

  // object destructuring
  // goes inside the object, and assigns the value to this variable
  // const { imageURL } = imageDataObject

  // make a detached image tag
  const newImage = document.createElement('img')

  // add styles if you want
  newImage.style.width = '10em'
  // add src to the image
  newImage.src = imageURL

  return newImage
}
// loop over data
imageData.forEach(imageDataObject => {
  // 1. use our component
    const myImage = makeImage(imageDataObject)
    // 2. attach our finished product to the DOM
    document.body.prepend(myImage)
})



// TASK 1- Import the data we need to "hydrate" our component.
//  On the one hand, the default export from data/panelData.js
//  On the other hand, the default export from data/constants.js
//  Destructure `open` and `close` from the constants
import panelData from './data/panelData'
import myArbitraryName from './data/constants'

const { open, close } = myArbitraryName

// TASK 2- Verify our imports using log statements
console.log(panelData) // log the panelData
console.log(open) // log the open arrow
console.log(close) // log the close arrow


// TASK 3- Comment out the div.panel from index.html and grab its parent element.
//  We will generate the panel with code, and we'll need the parent
//  so we can append the code-generated panel to the DOM.
const accordion = document.querySelector('.accordion'); 

// TASK 4- Create a function 'makePanel' that creates a panel exactly as you see it in the HTML.
function makePanel({ title, content }) {
  // const { title, content } = panelDataObject

  // TASK 5- Instantiate all the elements needed for a panel
  const panel = null
  const panelBar = null
  const panelContent = null
  const panelTitle = null
  const panelButtons = null
  const openButton = null
  const closeButton = null


  // TASK 6- Setup the structure of our elements
  /*
    <div>                   // panel
      <div>                 // panelBar
        <h3></h3>           // panelTitle
        <div>               // panelButtons 
          <button></button> // openButton
          <button></button> // closeButton
        </div>
      </div>
      <div></div>           // panelContent
    </div>
  */


  // TASK 7- Add proper class names to our elements (See index.html for reference)
  // paying attention to the elements that need to start out hidden


  // TASK 8- Set text content using arguments as raw material
  //  and also using the open and close arrows imported at the top of the file


  // TASK 9- When the 'open' or 'close' buttons are clicked, the content is toggled on/off:
  //  - the open button needs to go away (the 'hide-btn' class name controls this)
  //  - the close button needs to show (the 'hide-btn' class name controls this)
  //  - the contents need to show (the 'toggle-on' class name controls this)


  // don't forget to return the panel!
  return null
}


// TASK 10- Loop through the panelData we imported from the data folder
//  creating panels for each content and title and append them to the DOM.
//  We can do this with a single forEach, or with a map and a forEach.


// [STRETCH] Comment out the links inside the nav and
// write a linkMaker that takes { href, className, text }
// and returns an anchor tag with the right href, class and textContent.
// Loop over the 'linkData' in the data folder, generate anchor tags
// and append them to the nav.
