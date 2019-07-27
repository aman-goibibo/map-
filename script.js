

  $(document).ready(function () {
    //   console.log(location.href.lat)
    //   let lat = new URLSearchParams(window.location.search)
    //   let long = new URLSearchParams(window.location.long)
      function param(name) {
        return (location.search.split(name + '=')[1] || '').split('&')[0];
    }

    let lat = param(lat);

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