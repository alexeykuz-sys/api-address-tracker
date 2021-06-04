# Frontend Mentor - IP address tracker solution


![(https://github.com/alexeykuz-sys/api-address-tracker/blob/main/images/responsive.PNG)
](https://github.com/alexeykuz-sys/api-address-tracker/blob/main/images/responsive.PNG)



This is a solution to the [IP address tracker challenge on Frontend Mentor](https://api-address-tracker.vercel.app/).
## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Acknowledgments](#acknowledgments)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

The idea of this project is to build a page allowing user to see the location of the IP address. The page has to be mobile first and be fully responsive on all creen sizes. The technology used for the project is [LeafletJS](www.leafletjs.com) and  [GeoIpify](www.geo.ipify.org)

### The challenge

Users should be able to:

- View the optimal layout for each page depending on their device's screen size
- See hover states for all interactive elements on the page
- See their own IP address on the map on the initial page load
- Search for any IP addresses or domains and see the key information and location


### Links

- Solution URL: [Github](https://github.com/alexeykuz-sys/api-address-tracker)
- Live Site URL: [Deployed version](https://api-address-tracker-alexeykuz-sys.vercel.app/)

## My process

### Built with

- Semantic HTML5 markup
- SASS
- Flexbox
- Mobile-first workflow

### What I learned

I learned how to use map APIs and render the data from API.
I have also used two different maps sources. Here is extra code for Open Street Map

const map = L.map('display-map', {
  'center': [0,0],
  'zoom': 0,
  'layers': [
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        })
  ]
})

updateMarker =(update_marker = [-42,42]) =>{
  map.setView(update_marker, 15) //setting the view and zoom
  L.marker(update_marker).addTo(map); // settting the marker  on the map

}`

## Acknowledgments

This is where you can give a hat tip to anyone who helped you out on this project. Perhaps you worked in a team or got some inspiration from someone else's solution. This is the perfect place to give them some credit.
