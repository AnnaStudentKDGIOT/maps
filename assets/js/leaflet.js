// initialize map once, at the zoom you want
var map = L.map('map').setView([32.164972, 35.364135], 13);

// use the osm-intl tiles with English labels
L.tileLayer(
  'https://maps.wikimedia.org/osm-intl/{z}/{x}/{y}.png?lang=en', {
    maxZoom: 19,
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
