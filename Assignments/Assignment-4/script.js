
const apiKey = 'b49878cb5315675900eb3650889b6600';	
const fetchBtn = document.getElementById('fetchBtn');

fetchBtn.addEventListener('click', async function() {
    const city = document.getElementById('cityInput').value;
    const display = document.getElementById('displayArea');

    // Clear any previous results by emptying the text
    display.textContent = '';

    const geoResponse = await fetch(`https://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${apiKey}`);
    const geoData = await geoResponse.json();

    if (geoData.length === 0) {
        alert("Location not found");
        return; 
    }

    const lat = geoData[0].lat;
    const lon = geoData[0].lon;
    const name = geoData[0].name;

    const weatherResponse = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`);
    const weatherData = await weatherResponse.json();

    // Build the Display Data using DOM Elements
    const card = document.createElement('div');
    card.setAttribute('class', 'weather-card');

    const heading = document.createElement('h2');
    heading.textContent = name;

    const tempPara = document.createElement('p');
    tempPara.setAttribute('class', 'temp');
    tempPara.textContent = Math.round(weatherData.main.temp) + '°C';

    const condPara = document.createElement('p');
    condPara.textContent = 'Conditions: ' + weatherData.weather[0].main;

    const coordPara = document.createElement('p');
    coordPara.textContent = 'Coordinates: ' + lat.toFixed(2) + ', ' + lon.toFixed(2);

    // Attach all the new elements to the card
    card.appendChild(heading);
    card.appendChild(tempPara);
    card.appendChild(condPara);
    card.appendChild(coordPara);

    // Attach the completed card to the page
    display.appendChild(card);
});
