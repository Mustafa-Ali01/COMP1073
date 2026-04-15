const apiKey = 'b49878cb5315675900eb3650889b6600';
const fetchBtn = document.getElementById('fetchBtn');

fetchBtn.addEventListener('click', async function() {
    const city = document.getElementById('cityInput').value;
    const display = document.getElementById('displayArea');

    // Get Coordinates
    const geoResponse = await fetch(`https://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${apiKey}`);
    const geoData = await geoResponse.json();

    // Stop the function if the city is not found
    if (geoData.length === 0) {
        alert("Location not found");
        return; 
    }

    const lat = geoData[0].lat;
    const lon = geoData[0].lon;
    const name = geoData[0].name;

    alert("Coordinates found:", lat, lon);
});
