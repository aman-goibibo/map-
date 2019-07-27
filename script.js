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