

  $(document).ready(function () {
      console.log(location.href)
      let lat = req.query.lat;
      let long = req.query.long;

      console.log(lat);
      console.log(long)

  })

  function initialize() {
    var fenway = {lat, lng};
  
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