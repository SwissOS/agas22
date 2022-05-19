// Initialize and add the map
function initMap() {
  // The location of Uluru
  const veyrierdouane = { lat: 46.167455, lng: 6.186741 };
  // The map, centered at Uluru
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 16,
    center: veyrierdouane,
  });
  // The marker, positioned at Veyrier-Douane
  const marker = new google.maps.Marker({
    position: veyrierdouane,
    map: map,
  });
}

window.initMap = initMap;
