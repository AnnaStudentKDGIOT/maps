// initialize map once, at the zoom you want
var map = L.map('map').setView([32.164972, 35.364135], 10);

// use the osm-intl tiles with English labels
L.tileLayer(
  'https://maps.wikimedia.org/osm-intl/{z}/{x}/{y}.png?lang=en', {
    maxZoom: 13,
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  }
).addTo(map);

// add your overlays as before
L.marker([32.164972, 35.364135])
  .addTo(map)
  .bindPopup('<b>Hello world!</b><br>I am a Leaflet marker.')
  .openPopup();

L.circle([32.164972, 35.364135], {
  color: 'red',
  fillColor: '#f03',
  fillOpacity: 0.5,
  radius: 500
}).addTo(map)
  .bindPopup('I am a circle.');
  

  var map = L.map('map').setView([32.164972,35.364135], 8);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

L.marker([32.164972,35.364135]).addTo(map)
    .bindPopup('A pretty CSS popup.<br> Easily customizable.')
    .openPopup();

var map = L.map('map').setView([32.164972,35.364135], 13);

// Add OpenStreetMap tiles as the base layer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// Add a marker at the same coordinates
var marker = L.marker([32.164972,35.364135]).addTo(map);
marker.bindPopup('<b>Hello world!</b><br>I am a Leaflet marker.').openPopup();

// Add a circle overlay
var circle = L.circle([32.164972,35.364135], {
  color: 'red',
  fillColor: '#f03',
  fillOpacity: 0.5,
  radius: 500
}).addTo(map);
circle.bindPopup('I am a circle.');