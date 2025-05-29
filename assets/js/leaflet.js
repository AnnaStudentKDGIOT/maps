// initialize map once, at the zoom you want
var map = L.map('map').setView([32.164972, 35.364135], 10);


  

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
marker.bindPopup('Target').openPopup();
var marker = L.marker([32.167133645400185, 35.33529461248444]).addTo(map);
marker.bindPopup('Gideon ha shofet tomb').openPopup();
var marker = L.marker([32.16078511879551, 35.32928645385604]).addTo(map);
marker.bindPopup('Chabad Itamar').openPopup();
var marker = L.marker([32.16261978116773, 35.33761203012379]).addTo(map);
marker.bindPopup('Roadside אצלי בגבעה restaurant').openPopup();

var marker = L.marker([32.163873143133564, 35.33904969406694]).addTo(map);
marker.bindPopup('Historical landmark').openPopup();


// Add a circle overlay
var circle = L.circle([32.164972,35.364135], {
  color: 'red',
  fillColor: '#f03',
  fillOpacity: 0.5,
  radius: 500
}).addTo(map);
circle.bindPopup('I am a circle.');