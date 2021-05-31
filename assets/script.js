const searchButton = document.getElementById('search-button');
const searchInput = document.getElementById('search-input');
const secret_api = ' ENTER YOUR CODE';
const bypass_cors_url = 'https://cors-anywhere.herokuapp.com';
const api_uri = 'https://geo.ipify.org/api/';
let current_version = 'v1';




var mymap = L.map('mapid').setView([51.505, -0.09], 13);

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1IjoiYWxleGV5bWFwIiwiYSI6ImNrcDhvcWVvNDBheXEyeW9nd3hiYTRwYm8ifQ.3MQpyGhVFK3KDO0wVUr7og'
}).addTo(mymap);

var marker = L.marker([51.5, -0.09]).addTo(mymap);


searchButton.addEventListener('click', () => {
  const inputValue = searchInput.value;
  alert(inputValue);
});