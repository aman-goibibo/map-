var getparams = {};

$(document).ready(function () {
    //   console.log(location.href.lat)
    //   let lat = new URLSearchParams(window.location.search)
    //   let long = new URLSearchParams(window.location.long)
    //   function param(name) {
    //     return (location.search.split(name + '=')[1] || '').split('&')[0];
    // }

    getparams = decodeURI(window.location.search)
        .replace('?', '')
        .split('&')
        .map(param => param.split('='))
        .reduce((values, [key, value]) => {
            values[key] = value
            return values
        }, {})
    

})

function initialize() {
    console.log(getparams.lat);
    var fenway = { lat: getparams.lat, lng: getparams.long };

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