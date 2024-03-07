function initialiserCarte() {
    var myLatLng = {lat: 48.0833, lng: -1.6833}; // RENNES
    var optionsGoogleMap = {
    zoom : 8, /* Facteur de zoom */
    center : myLatLng, /* Point de centrage */
    /* Mode d'affichage de la carte (vue carte routière )*/
    /* NB : google.maps.mapTypeId.ROADMAP -> Affichage en mode Plan */
    /* google.maps.mapTypeId.SATELLITE -> Affichage en mode Satellite */
    /* google.maps.mapTypeId.HYBRID -> Affichage en mode Mixte
    (Plan/Satellite) */
    /* google.maps.mapTypeId.TERRAIN -> Affichage en mode Relief */
    mapTypeId : google.maps.MapTypeId.ROADMAP
    }
    var maCarte = new google.maps.Map(document.getElementById("maCarte"),
    optionsGoogleMap);
    

    var marqueurRennes = new google.maps.Marker({
        position : myLatLng,
        map : maCarte,
        title : "Rennes, capitale de la Bretagne"
        });

        var pointeurQuimper = "pointeur.png" ;
        var marqueurQuimper = new google.maps.Marker({
        position : {lat: 48, lng: -4.1}, // ou new google.maps.LatLng(48,-4.1)
        map : maCarte,
        title : "Quimper préfecture du finistère",
        icon : pointeurQuimper
        });

        var commentairesRennes = "<div>" + "<h1>Rennes</h1>" + "Rennes est une commune française, chef-lieu du département d’Ille-et-Vilaine<br>" + "</div>";
        var fenetreRennes = new google.maps.InfoWindow({
        content : commentairesRennes
        });
        google.maps.event.addListener(marqueurRennes, "click", 
        
        function() {
        fenetreRennes.open(maCarte, marqueurRennes);
        });

    
    var listeVilles = new Array(4);
listeVilles['Rennes'] = {
position : new google.maps.LatLng(48.0833, -1.6833),
population : 209860
};
listeVilles['Quimper'] = {
position : new google.maps.LatLng(48, -4.1),
population : 63360
};
listeVilles['Saint-Malo'] = {
position : new google.maps.LatLng(48.650002, -2.01667),
population : 47045
};
for (var ville in listeVilles) {
var optionsCercle = {
strokeColor : "#FF0000",
strokeOpacity : 0.8,
strokeWeight : 1,
fillColor : "#FF0000",
fillOpacity : 0.35,
map : maCarte,
center : listeVilles[ville].position,
radius : listeVilles[ville].population / 20
};
cercleVille = new google.maps.Circle(optionsCercle);
}
}