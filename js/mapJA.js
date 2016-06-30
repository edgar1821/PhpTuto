var map;
function initMap() {

  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: -12.103921, lng: -76.994804}, 
    zoom: 16
  });
  google.maps.event.addListener(map,"click",function(event){
  	//Onteniendo latitud y longitud
  	var coordenadas= event.latLng.toString();
  	coordenadas=coordenadas.replace("(","");
  	coordenadas=coordenadas.replace(")","");
  	document.getElementById("txtladlong").value=coordenadas;

  	//obteniendo latitud y longitud por separado
  	var coordenadasLista=coordenadas.split(",");
  	document.getElementById('txtlatitd').value=coordenadasLista[0];
  	document.getElementById('txtLng').value=coordenadasLista[1];

  	var x=parseFloat(coordenadasLista[0]);
  	var y=parseFloat(coordenadasLista[1]);
  	var direccion = new google.maps.LatLng(x,y);

  	//marcador
  	var marcador= new google.maps.Marker({
  		position:direccion,
  		map:map,
  		animation:google.maps.Animation.DROP,
  		draggable:false
  	});

  });

}