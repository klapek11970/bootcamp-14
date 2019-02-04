'use strict';

var templateItem = document.getElementById('template-carousel-item').innerHTML;

Mustache.parse(templateItem);

var listItems = '';

for(var i = 0; i < carouselData.length; i++){
	console.log(carouselData);
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
