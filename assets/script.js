// pull from different file

const secretApi = 'at_hqno4AyaM81PwU3wc5lGtnqVcadHM'
const mapboxKey = 'pk.eyJ1IjoiYWxleGV5bWFwIiwiYSI6ImNrcDhvcWVvNDBheXEyeW9nd3hiYTRwYm8ifQ.3MQpyGhVFK3KDO0wVUr7og'
const bypassCorsUrl = 'https://cors.bridged.cc/'
const apiUri = 'https://geo.ipify.org/api/'
let currentVerion = 'v1'

// form elements
let searchIp = document.getElementById('search-ip');
let searchBtn = document.getElementById('search-button');

// elements to update 
let currentIp = document.getElementById('ip-address');
let currentTown = document.getElementById('ip-location');
let currentZone = document.getElementById('ip-time');
let currentIsp = document.getElementById('ip-name');


const headersOption = {
  headers: {
      'Access-Control-Allow-Origin': '*',
  }
}

// from Leafletjs creates variable map with class 'display-map' and gives it parameters

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

updateMarker =(updateMarker = [-42,42]) =>{
  
     map.setView(updateMarker, 16) //setting the view and zoom
  L.marker(updateMarker).addTo(map); // settting the marker  on the map

}

// show user's ip location
const userIp = async () => {
  const response = await fetch("https://api.ipify.org/?format=json");
  const data = await response.json();
  return data;
}
userIp()
  .then(data => {
    getIPDetails(data['ip'])
    })


getIPDetails = (defaultIp) => {
  if(defaultIp == undefined){
    let ipUrl = `${bypassCorsUrl}${apiUri}${currentVerion}?apiKey=${secretApi}` 
  }
  else {
    let ipUrl = `${bypassCorsUrl}${apiUri}${currentVerion}?apiKey=${secretApi}&ipAddress=${defaultIp}`
  }
  fetch(ipUrl, headersOption)
  .then(results => 
    results.json()
  )
  .then(data => {
    console.log(data)
    currentIp.innerHTML = data.ip;
    currentTown.innerHTML = `${data.location.city} ${data.location.country} ${data.location.postalCode}`;
    currentZone.innerHTML = data.location.timezone;
    currentIsp.innerHTML = data.isp;

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

