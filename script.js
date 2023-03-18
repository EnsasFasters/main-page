const $header  = $('header');
const $body    = $('body');
const $blur    = $('main, footer');
const $button  = $('body > div > div');

$(document).ready(function(){
	$blur.fadeIn(3000);
})

var pixelDelay;
function scrollToElement(id){
	var element = document.getElementById(id);
	var offsetTop = element.offsetTop;
	offsetTop-=pixelDelay;
	window.scrollTo({
		top:offsetTop
	});
	hideBar();
}



function handleMediaQueryChange(event) {
  if (event.matches) {
      pixelDelay = -100;
  } else {
      pixelDelay = 40;  
  }
}

const mediaQuery = window.matchMedia('(max-width: 768px)');
mediaQuery.addEventListener('change', handleMediaQueryChange);
handleMediaQueryChange(mediaQuery);


/*NavBar*/

let nav_bar = false;


$button.click(function() {
  nav_bar ? hideBar() : showBar();
});

function hideBar() {
  $header.css('right', '100vw');
  $body.css('overflow-y', 'visible');
  $blur.css('filter','blur(0px)');
  nav_bar = !nav_bar;
}

function showBar() {
  $header.css('right', '0');
  $body.css('overflow-y', 'hidden');
  $blur.css('filter','blur(8px)');
  nav_bar = !nav_bar;
}
