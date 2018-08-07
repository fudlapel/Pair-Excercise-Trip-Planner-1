module.exports = () => {
  const divElement = document.createElement('div')
  divElement.style.width = '32px'
  divElement.style.height = '39px'
  divElement.style.backgroundImage = 'url(http://i.imgur.com/WbMOfMl.png)'
  new mapboxgl.Marker(divElement).setLngLat([-74.009151, 40.705086]).addTo(map)
}
