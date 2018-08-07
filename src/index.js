console.log('this is trip planner1 ')
const marker = require('./marker')
const mapboxgl = require('mapbox-gl')

mapboxgl.accessToken =
  'pk.eyJ1Ijoibm1jY2xlYW4iLCJhIjoiY2prazVkY2l0MGQzZDNxbWd1cGFsNGN2OSJ9.0OhxFhz5mjIARZMf-bb3wA'

const map = new mapboxgl.Map({
  container: 'map',
  center: [-74.009, 40.705], // FullStack NY coordinates; alternatively, use [-87.6354, 41.8885] for Chicago
  zoom: 12, // starting zoom
  style: 'mapbox://styles/mapbox/streets-v10', // mapbox has lots of different map styles available.
})
marker()
