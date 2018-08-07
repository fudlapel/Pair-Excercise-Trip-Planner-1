const mapboxgl = require('mapbox-gl');

module.exports = () => {
  const divElement = document.createElement('div')
  divElement.style.width = '32px'
  divElement.style.height = '39px'
  divElement.style.backgroundImage = 'url(http://i.imgur.com/WbMOfMl.png)'
  new mapboxgl.Marker(divElement).setLngLat([-74.009151, 40.705086]).addTo(map)
}


const iconURLs = {
  activity: 'http://i.imgur.com/WbMOfMl.png',
  hotel: 'http://i.imgur.com/D9574Cu.png',
  restaurant: 'http://i.imgur.com/cqR6pUI.png'
}

const marker = (type, coordinateArr) {
  const divElement = document.createElement('div')
  divElement.style.width = '32px'
  divElement.style.height = '39px'
  divElement.style.backgroundImage = iconURLs[type]
  const placeMarker = new mapboxgl.Marker(divElement).setLngLat(coordinateArr).addTo(map)

}

