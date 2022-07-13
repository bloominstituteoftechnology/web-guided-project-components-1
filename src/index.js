// TASK 0- Motivate demoing a small makeImage component
//  that takes an { imgURL } and returns an img element.
//  Then loop over these URLs making images as you go:
const imageData = [
  { imageURL: 'https://images.dog.ceo/breeds/mastiff-tibetan/n02108551_978.jpg' },
  { imageURL: 'https://images.dog.ceo/breeds/mastiff-bull/n02108422_3398.jpg' },
  { imageURL: 'https://images.dog.ceo/breeds/mastiff-bull/n02108422_2947.jpg' },
]

// Component -> FUNCTION
function makeImage({ imageURL }) {
  // const imageURL = imgObj.imageURL
  const image = document.createElement("img");
  image.src = imageURL;
  image.style.height = "10em";
  return image;
}

imageData.forEach(img => {
  const imgElem = makeImage(img);
  // document.body.prepend(imgElem);
})

/**
 * for (let i = 0; i < imageData.length; i++) {
 *   const imgElem = makeImage(imageData[i]);
 *   document.body.prepend(imgElem);
 * }
 */

// TASK 1- Import the data we need to "hydrate" our component.
//  On the one hand, the default export from data/panelData.js
//  On the other hand, the default export from data/constants.js
//  Destructure `open` and `close` from the constants
import panelData from "./data/panelData";
import linkData from "./data/linkData";
import constants from "./data/constants";

const { open, close } = constants;
// const open = constants.open;
// const close = constants.close;

// TASK 2- Verify our imports using log statements
console.log(panelData); // log the panelData
console.log(linkData); // log the open arrow
console.log(open, close); // log the close arrow


// TASK 3- Comment out the div.panel from index.html and grab its parent element.
//  We will generate the panel with code, and we'll need the parent
//  so we can append the code-generated panel to the DOM.
const accordion = document.querySelector(".accordion");


// TASK 4- Create a function 'makePanel' that creates a panel exactly as you see it in the HTML.
function makePanel({ title, content }) {
  // const title = panelObj.title;
  // const content = panelObj.content;

  // TASK 5- Instantiate all the elements needed for a panel
  const panel = document.createElement("div");
  const panelBar = document.createElement("div");
  const panelContent = document.createElement("div");
  const panelTitle = document.createElement("h3");
  const panelButtons = document.createElement("div");
  const openButton = document.createElement("button");
  const closeButton = document.createElement("button");

  // TASK 6- Setup the structure of our elements
  panel.appendChild(panelBar); // <div><div></div></div>
  panel.appendChild(panelContent); // <div><div></div><div></div></div>
  panelBar.appendChild(panelTitle);
  panelBar.appendChild(panelButtons);
  panelButtons.appendChild(openButton);
  panelButtons.appendChild(closeButton);

    /**
        <div class="panel">
          <div class="panel-bar">
            <h3>Title of Panel</h3>
            <div class="panel-buttons">
              <button class="panel-btn-open">&#9660</button>
              <button class="panel-btn-close hide-btn">Close</button>
            </div>
          </div>
          <div class="panel-content toggle-on">
            Content of panel
          </div>
        </div>
     */


  // TASK 7- Add proper class names to our elements (See index.html for reference)
  // paying attention to the elements that need to start out hidden
  panel.classList.add("panel");
  panelBar.classList.add("panel-bar");
  panelButtons.classList.add("panel-buttons");
  openButton.classList.add("panel-btn-open");
  closeButton.classList.add("panel-btn-close", "hide-btn");
  panelContent.classList.add("panel-content");


  // TASK 8- Set text content using arguments as raw material
  //  and also using the open and close arrows imported at the top of the file
  panelTitle.textContent = title;
  panelContent.textContent = content;
  openButton.textContent = open;
  closeButton.textContent = close;

  // TASK 9- When the 'open' or 'close' buttons are clicked, the content is toggled on/off:
  //  - the open button needs to go away (the 'hide-btn' class name controls this)
  //  - the close button needs to show (the 'hide-btn' class name controls this)
  //  - the contents need to show (the 'toggle-on' class name controls this)
  panelButtons.addEventListener("click", () => {
    openButton.classList.toggle("hide-btn");
    closeButton.classList.toggle("hide-btn");
    panelContent.classList.toggle("toggle-on");
  })

  // don't forget to return the panel!
  return panel;
}

// const testPanel = makePanel({ title: "foo", content: "bar" });
// accordion.appendChild(testPanel);

// TASK 10- Loop through the panelData we imported from the data folder
//  creating panels for each content and title and append them to the DOM.
//  We can do this with a single forEach, or with a map and a forEach.
const panelElements = panelData.map(panelElem => {
  return makePanel(panelElem);
})

panelElements.forEach(panelElement => {
  accordion.appendChild(panelElement);
})

// [STRETCH] Comment out the links inside the nav and
// write a linkMaker that takes { href, className, text }
// and returns an anchor tag with the right href, class and textContent.
// Loop over the 'linkData' in the data folder, generate anchor tags
// and append them to the nav.
/**
        <a href="#" class="nav-item">Home</a>
        <a href="#" class="nav-item">About</a>
        <a href="#" class="nav-item">Blog</a>
        <a href="#" class="nav-item">Contact</a>
 */
// WAT IS A COMPONENT?!?!?!?!?!?!?!?!?!?!?! A FUNCTION
function linkMaker({ href, className, text }) {
  // STEP 1
  // create the element(s)
  const link = document.createElement("a");
  // STEP 2
  // update href, class, and textContent
  link.href = href;
  link.classList.add(className);
  // link.className = className;
  link.textContent = text;
  // STEP 3
  // DON'T FORGET TO RETUUUUURN!
  return link;
}

// const linkElem = linkMaker({ href: "https://caseyharding.com", className: "nav-item", text: "BLAH"});
// document.querySelector("nav").appendChild(linkElem);
const nav = document.querySelector("nav");

linkData.forEach(linkObj => {
  const linkElem = linkMaker(linkObj);
  nav.appendChild(linkElem);
})