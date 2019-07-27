

  $(document).ready(function () {
      console.log(location.href.lat)
      let lat = new URLSearchParams(window.location.search)
      let long = new URLSearchParams(window.location.long)

    console.log(lat);

  })

  function initialize() {
    var fenway = {lat: 42.345573, lng: -71.098326};
  
    var panorama = new google.maps.StreetViewPanorama(
        document.getElementById('pano'), {
          position: fenway,
          pov: {
            heading: 34,
            pitch: 10
          }
        });
        
        console.log(panorama)
  }