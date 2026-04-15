const apiKey = 'b49878cb5315675900eb3650889b6600';
const fetchBtn = document.getElementById('fetchBtn');

fetchBtn.addEventListener('click', async function() {
    const city = document.getElementById('cityInput').value;
    const display = document.getElementById('displayArea');

    // Logging to ensure the button click is working
    alert("Searching for city: " + city);
});
