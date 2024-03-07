//Demarrage de notre fonction Initialize pour pouvoir afficher notre carte Meteo//
function initialize() {
	var Carte = L.map('maCarte').setView([48.6500000, -2.0166700], 7);
	var Modele = L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 19 /* s : sous-domaine z,x,y : axes*/ });
	Carte.addLayer(Modele);

//Affichage de notre pointeur hola.png//
	var monIcon = L.icon({ iconUrl: 'hola.png', iconSize: [38, 30], iconAnchor: [9, 20], popupAnchor: [0, -14] });

    //Demarrage de notre fonction pour pouvoir faire un menu deroulant dynamique//
	
    let menuselect = document.createElement('select');
    for ( var i=0; i < markers.length; ++i )
	{
		L.marker( [markers[i].lat, markers[i].lng], {icon: monIcon} )
		.bindPopup( '<a href="' + markers[i].url + '" target="_blank">' + markers[i].name + '</a>' )
		.addTo( Carte );


        //Affichage de notre fichier json pour avoir les données//
        
        let opt = new Option (markers[i].name, markers[i].name);
        menuselect.options[menuselect.options.length]=opt;
        document.getElementById("liste").appendChild(menuselect);    
        
        var cercle = L.circle([markers[i].lat, markers[i].lng], {
        color: 'blue',
        fillColor: '#00f',
        fillOpacity: 0.5,
        radius: markers[i].pop/8
        }).addTo( Carte );
	}
    



 //Demarrage de notre fonction pour pouvoir faire un zoom a notre ville que nousa avons choisi//

    menuselect.addEventListener('change', function() {
    var lng = markers[this.selectedIndex].lng;
    var lat = markers[this.selectedIndex].lat;
    
    Carte.remove();
        
    Carte = L.map('maCarte').setView([lat, lng], 10);
	var Modele = L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 19 /* s : sous-domaine z,x,y : axes*/ });
	Carte.addLayer(Modele);
        
    console.log(lng);
    console.log(lat);


      //Affichage de notre fichier json pour avoir les données//
        
    for ( var i=0; i < markers.length; ++i )
	{
		L.marker( [markers[i].lat, markers[i].lng], {icon: monIcon} )
		.bindPopup( '<a href="' + markers[i].url + '" target="_blank">' + markers[i].name + '</a>' )
		.addTo( Carte );   
        
        var cercle = L.circle([markers[i].lat, markers[i].lng], {
        color: 'blue',
        fillColor: '#00f',
        fillOpacity: 0.5,
        radius: markers[i].pop/8
        }).addTo( Carte );
	}
        
    });
  }
