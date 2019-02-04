'use strict';
//key: AIzaSyCV5qFMiOUGRXAL67rB-D18TVEWPjYNGVI

///////////////////
// Google Map
//var markers = []

var locations = {
	uluru : {lat: -25.344, lng: 125},
	Wasaw : {lat: 52.232855, lng: 20.9211131},
	Berlin : {lat: 52.5067614, lng: 13.2846508},
	W : {lat: 47.2511082, lng: -123.1246739},
	loc4 : {lat: 55.5807482, lng: 36.82515}
}

function initMap() {
	
  // The map, centered at Uluru
  var map =
	new google.maps.Map(document.getElementById('map'), {zoom: 4, center: locations.uluru});
  
  var key
	for (key in locations){
		var marker = new google.maps.Marker({position: locations[key], map: map}) // locations[key] ?!?! czemu jako array a nie jako obiekt obj.key
		//markers.push(marker)
		marker.addListener('click', function(){
			info.innerHTML = 'You clicked '+key;
		});	
	}
}

///////////////////
// template

var templateItem = document.getElementById('template-carousel-item').innerHTML;

Mustache.parse(templateItem);

var listItems = '';

for(var i = 0; i < carouselData.length; i++){
	console.log(carouselData);
	carouselData[i].id = i
	listItems += Mustache.render(templateItem, carouselData[i]);
}

carousel.insertAdjacentHTML('beforeend', listItems);


///////////////////
//	carousel

var elem = document.querySelector('#carousel');
var flkty = new Flickity( elem, {
  // options
  cellAlign: 'left',
  contain: true,
	pageDots: false,
	hash: true
});

var progressBar = document.querySelector('.progress-bar')

flkty.on( 'scroll', function( progress ) {
  progress = Math.max( 0, Math.min( 1, progress ) );
  progressBar.style.width = progress * 100 + '%';
});
