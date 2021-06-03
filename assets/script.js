// pull from different file

const secret_api = 'at_hqno4AyaM81PwU3wc5lGtnqVcadHM'
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


const map = L.map('display-map', {
  'center': [60,10],
  'zoom': 8,
  'layers': [
      L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
          attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        })
  ]
})

//creates a marker and map view with a variable map and updatE_marker

updateMarker =(update_marker = [-42,42]) =>{
  map.setView(update_marker, 13) //setting the view
  L.marker(update_marker).addTo(map); // settting the marker  

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

    updateMarker(data.location.lat, data.location.lng);
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

