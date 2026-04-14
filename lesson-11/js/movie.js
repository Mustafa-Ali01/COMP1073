// Base URL for OMDb API
const baseURL = 'https://www.omdbapi.com/';
//
// STEP 1: Get your API key from http://www.omdbapi.com/apikey.aspx
const key = '739144e3';
//API_KEY=123456787

//require('dotenv').config()
//const key1 = process.env.API_KEY;


// DOM elements
const searchTerm = document.querySelector('.search');
const yearInput = document.querySelector('.year');
const searchForm = document.querySelector('form');
const section = document.querySelector('section');

// STEP 2: Add submit event listener
searchForm.addEventListener('submit',fetchResults);

// Function to fetch results
async function fetchResults(event) {
    // STEP 3: Prevent default form submission
    event.preventDefault();

    // STEP 4: Build the request URL
    let url = baseURL + '?apikey=' + key;
    
    if(searchTerm.value){
        url += '&s=' + searchTerm.value;
    }

    if(yearInput.value){
        url += '&y=' + yearInput.value;
    }

    console.log("Request URL: ",url);


    // STEP 5: Use fetch() to get data and pass to displayResults()
   try{ 
    //Wait for response
    const response = await fetch(url);
    //Convert to JSON
    const json = await response.json();
    //Pass data to display functions
    displayResults(json);
   }
   catch(error){
    console.error('Error: ',error);
   }
      

}

// Function to display results
function displayResults(json) {

    // STEP 6: Log JSON data
    console.log(json);
    

    // Clear previous results
    while (section.firstChild) {
        section.removeChild(section.firstChild);
    }

    // STEP 7: Store movies array
    
    const movies = json.Search;

    if (!movies || movies.length === 0) {
        const para = document.createElement('p');
        para.textContent = 'No results found.';
        section.appendChild(para);
    } else {
        for (let i = 0; i < movies.length; i++) {

            const article = document.createElement('article');
            const heading = document.createElement('h2');
            const img = document.createElement('img');
            const para = document.createElement('p');

            const current = movies[i];

            // STEP 8: Extract title, year, poster
            heading.textContent = current.Title;
            para.textContent = "Year: " + current.Year;
            if(current.Poster != "N/A"){
                img.src = current.Poster;
                img.alt = current.Title;
            }
            

            // STEP 9: Build DOM structure
            article.appendChild(heading);
            article.appendChild(img);
            article.appendChild(para);
            section.appendChild(article);
            

        }
    }
}