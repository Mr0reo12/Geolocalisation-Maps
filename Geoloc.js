function MaPosition(position) {
    var latitude = position.coords.latitude;
    var longitude = position.coords.longitude;
    var altitude = position.coords.altitude;
    document.getElementById('geolocalisation').innerHTML = 'latitude : ' + latitude +
    '<br />' + 'longitude : ' + longitude + '<br />' + 'altitude : ' + altitude + '<br />' ;
    }
    function PositionActuelle() {
    if(navigator.geolocation){
    navigator.geolocation.getCurrentPosition(MaPosition); } // Appel Asynchrone
    }

    function ConvertDMSToDD(degrees, minutes, seconds, direction) {
        var dd = Number(degrees) + Number(minutes)/60 + Number(seconds)/(60*60);
        if (direction == "S" || direction == "W" || direction == "O" ) {
        dd = dd * -1;
        }
        return dd;
        }