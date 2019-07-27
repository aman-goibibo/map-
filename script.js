var getparams = {lat : '', lng : ''};


function initialize() {

    getparams = decodeURI(window.location.search)
        .replace('?', '')
        .split('&')
        .map(param => param.split('='))
        .reduce((values, [key, value]) => {
            values[key] = value
            return values
        }, {})
    console.log(getparams.lat);
    var fenway = { lat: parseInt(getparams.lat), lng: parseInt(getparams.long) };

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