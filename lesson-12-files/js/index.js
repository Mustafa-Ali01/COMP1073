// =============================
// Web APIs Interactive Page
// =============================

// --------------------
// Step 1: Update existing link
// --------------------
const myLink = document.querySelector("a");
// TODO: Change the link text (e.g., "MDN Learning Resources")
// TODO: Change the link URL to the MDN Client-side Web APIs page
myLink.textContent = "MDN Learning Resouces";
myLink.href = "https://developer.mozilla.org/en-US/docs/Web/JavaScript";

// --------------------
// Step 2: Add a new paragraph dynamically
// --------------------
const section = document.querySelector("section");
// TODO: Create a new paragraph element
const newPara = document.createElement("p");
// TODO: Set its text content
newPara.textContent = "Enjoy learning DOM Module";
// TODO: Add a class 'highlight'
newPara.classList.add("highlight");
// TODO: Append it to the section
section.appendChild(newPara);


// --------------------
// Step 3: Prepend text to the first paragraph in section
// --------------------
const firstPara = section.querySelector("p:first-of-type");
// TODO: Create a text node (e.g., "Fun fact: ")
const newTextNode = document.createTextNode("Fun Fact: ");
// TODO: Prepend it to firstPara
firstPara.prepend(newTextNode);
// --------------------
// Step 4: Button to toggle paragraph styles
// --------------------
const colorButton = document.getElementById("colorButton");
// TODO: Add click event to toggle a 'dynamic' class on all paragraphs
colorButton.addEventListener("click",()=>{
  const paragraphs = document.querySelectorAll("p");
  paragraphs.forEach(p =>{
    p.classList.toggle("dynamic");
  });
});

// --------------------
// Step 5: Button to add random fun facts
// --------------------
const addTextButton = document.getElementById("addTextButton");
// TODO: Add click event to create a new paragraph with a random fun fact
let funFacts = [];
addTextButton.addEventListener("click",()=>{
const facts =[
"Created in Just 10 Days",
"Originally Called Mocha ",
"Not Related to Java",
"Runs Everywhere ",
"Single-Threaded but Asynchronous "

];
const randomFact = facts[Math.floor(Math.random() * facts.length)];
const factsPara = document.createElement("p");
factsPara.textContent = randomFact;
factsPara.classList.add("highlight");
section.appendChild(factsPara);
funFacts.push(factsPara);

});
// TODO: Add class 'highlight' and append it to the section
// TODO: Save it in an array for resetting later

// --------------------
// Step 6: Button to reset fun facts
// --------------------
const resetButton = document.getElementById("resetButton");
// TODO: Add click event to remove all fun fact paragraphs
resetButton.addEventListener("click",()=>{
// TODO: Clear the array tracking them
funFacts.forEach(p=>p.remove());
funFacts=[];

});


// --------------------
// Step 7: Responsive body size
// --------------------
const body = document.body;
function resizeBody() {
  // TODO: Set body width and height to 75% of window.innerWidth/innerHeight

  body.style.width = (window.innerWidth * 0.75) + "px";
  body.style.height = (window.innerHeight * 0.75) + "px";
}
window.addEventListener("resize", resizeBody);
resizeBody(); // initial call

// --------------------
// Step 8: Extra interactivity – change background on mouse move
// --------------------
document.addEventListener("mousemove", e => {
  // TODO: Change body background color based on mouse X/Y position

console.log("Value of e.client x" + e.clientX);
console.log("Value of e.client y" + e.clientY);
const red = Math.min(255,Math.floor(e.clientX/window.innerWidth*255));
const blue = Math.min(255,Math.floor(e.clientY/window.innerWidth*255));
body.style.backgroundColor = `rgb(${red},100,${blue})`;
});


 console.log("Browser info:", navigator.userAgent);
 