'use strict';
//key: AIzaSyCV5qFMiOUGRXAL67rB-D18TVEWPjYNGVI

var selectid = 0 //store what mark id on map was pressed

///////////////////
// Google Map
var markers = []
var map

var locations = {
	Uluru : {lat: -25.344, lng: 125},
	Wasaw : {lat: 52.232855, lng: 20.9211131},
	Berlin : {lat: 52.5067614, lng: 13.2846508},
	Waszyngton : {lat: 47.2511082, lng: -123.1246739},
	Moscow : {lat: 55.5807482, lng: 36.82515}
}

function initMap() {
  // The map, centered at Uluru
  map =
	new google.maps.Map(document.getElementById('map'), {zoom: 4, center: locations.Uluru});

  var city
	for (city of Object.keys(locations)){
		var marker = new google.maps.Marker({position: locations[city], map: map,city: city})
		var id = markers.push(marker)-1
		marker.id = id
		
		marker.addListener('click', function() {
			selectid = this.id // dont centre map after select marker
			flkty.select(this.id);
			//window.alert("you pressed at "+this.city+" marker")
			console.log(this.id,this.city)
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


flkty.on( 'select', function() {
	if( selectid !== Flickity.data( carousel ).selectedIndex ){ // dont centre map after select marker
		map.panTo( locations[markers[Flickity.data( carousel ).selectedIndex].city] );
		map.setZoom(5);
	}
});


///////////////////
//	Accordion - jQuery


$("#accordion-jquery h3").click(function(){
	var elm = $("#accordion-jquery .active").removeClass('active')
	$(this).next().addClass('active')
})

/*
.click(function(){  }),
.addClass('class'),
.removeClass('class'),
.siblings('element#id').
*/

