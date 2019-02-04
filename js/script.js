'use strict';
//key: AIzaSyCV5qFMiOUGRXAL67rB-D18TVEWPjYNGVI

///////////////////
// Google Map
var markers = []

var locations = {
	uluru : {lat: -25.344, lng: 125},
	mark1 : {lat: -25.344, lng: 130},
	mark2 : {lat: -25.344, lng: 135}
}

function initMap() {
	
  // The map, centered at Uluru
  var map =
	new google.maps.Map(document.getElementById('map'), {zoom: 4, center: locations.uluru});
  
  var key
	for (key in locations){
		markers.push(new google.maps.Marker({position: locations[key], map: map})) // locations[key] ?!?! czemu jako array a nie jako obiekt obj.key
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
