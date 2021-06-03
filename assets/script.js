// pull from different file

const secret_api = 'at_hqno4AyaM81PwU3wc5lGtnqVcadHM'
const mapbox_key = 'pk.eyJ1IjoiYWxleGV5bWFwIiwiYSI6ImNrcDhvcWVvNDBheXEyeW9nd3hiYTRwYm8ifQ.3MQpyGhVFK3KDO0wVUr7og'
const bypass_cors_url = 'https://cors.bridged.cc/'
const api_uri = 'https://geo.ipify.org/api/'
let current_verion = 'v1'

// form elements
let searchIp = document.getElementById('search-ip');
let searchBtn = document.getElementById('search-button');

// elements to update 
let current_ip = document.getElementById('ip-address');
let current_town = document.getElementById('ip-location');
let current_zone = document.getElementById('ip-time');
let current_isp = document.getElementById('ip-name');


const headers_option = {
  headers: {
      'Access-Control-Allow-Origin': '*',
  }
}
// from Leafletjs
//  creates variable map with class 'display-map' and gives it parameters
// const map = L.map('display-map', {
//   'center': [0,0],
//   'zoom': 0,
//   'layers': [
//       L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
//         attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
//         })
//   ]
// })


const map = L.map('display-map')

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
  attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
  maxZoom: 18,
  id: 'mapbox/streets-v11',
  tileSize: 512,
  zoomOffset:-1,
  accessToken: 'pk.eyJ1IjoiYWxleGV5bWFwIiwiYSI6ImNrcDhvcWVvNDBheXEyeW9nd3hiYTRwYm8ifQ.3MQpyGhVFK3KDO0wVUr7og',
}).addTo(map)


//creates a marker and map view with a variable map and updatE_marker

// updateMarker =(update_marker = [-42,42]) =>{
//   map.setView(update_marker, 15) //setting the view and zoom
//   L.marker(update_marker).addTo(map); // settting the marker  on the map

// }


updateMarker =(update_marker = [-42,42]) =>{
  
     map.setView(update_marker, 16) //setting the view and zoom
  L.marker(update_marker).addTo(map); // settting the marker  on the map

}

getIPDetails = (default_ip) => {
  if(default_ip == undefined){
      var ip_url = `${bypass_cors_url}${api_uri}${current_verion}?apiKey=${secret_api}`
  }
  else {
      var ip_url = `${bypass_cors_url}${api_uri}${current_verion}?apiKey=${secret_api}&ipAddress=${default_ip}`
  }
  fetch(ip_url, headers_option)
  .then(result => result.json())
  .then(data => {
    current_ip.innerHTML = data.ip;
    current_town.innerHTML = `${data.location.city} ${data.location.country} ${data.location.postalCode}`;
    current_zone.innerHTML = data.location.timezone;
    current_isp.innerHTML = data.isp;

    updateMarker([data.location.lat, data.location.lng]);
  })
  .catch(error => {
    alert("Unable to get IP details")
    console.log(error)
})
}

getIPDetails();
document.addEventListener('load', updateMarker);

searchBtn.addEventListener('click', e =>{
  e.preventDefault()
  if (searchIp.value != '' && searchIp.value != null) {
    getIPDetails(searchIp.value)
    return
  }
    alert("Please enter a valid IP address");
})

