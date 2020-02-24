/*animation-duration*/
( function(){
	var sec = 0;
	var ade = document.querySelectorAll("[class*='animation-duration_']");
	for (i = 0; i < ade.length; i++) {
		var ade_cl = ade[i].classList;
		for (c=0; c < ade_cl.length; c++ ){
			if( ade_cl[c].indexOf("animation-duration_") > -1 ){
				sec = ade_cl[c].split("animation-duration_")[1];
			}
		}
		if (sec){ ade[i].style.animationDuration = sec + "s"; }
	}
})();


/*animation-iteration-count*/
( function(){
	var sec = 0;
	var ade = document.querySelectorAll("[class*='animation-iteration-count_']");
	for (i = 0; i < ade.length; i++) {
		var ade_cl = ade[i].classList;
		for (c=0; c < ade_cl.length; c++ ){
			if( ade_cl[c].indexOf("animation-iteration-count_") > -1 ){
				sec = ade_cl[c].split("animation-iteration-count_")[1];
			}
		}
		if (sec){ ade[i].style.animationIterationCount = sec; }
	}
})();

/*opacity*/
( function(){
	var sec = 0;
	var ade = document.querySelectorAll("[class*='opacity_']");
	for (i = 0; i < ade.length; i++) {
		var ade_cl = ade[i].classList;
		for (c=0; c < ade_cl.length; c++ ){
			if( ade_cl[c].indexOf("opacity_") > -1 ){
				sec = ade_cl[c].split("opacity_")[1];
			}
		}
		if (sec){ ade[i].style.opacity = sec; }
	}
})();

/*actions*/
/* Add Class fadeIn to an specific Element
in: el, individual element or group of elements. use  querySelectorAll Logic
return: na
*/
function base_fadeIn(el){
	if (!el){ return false; }
	var target  = document.querySelectorAll(el);
	if ( target.length ){
		for( t = 0; t<target.length; t++){
			if( target[t].classList.contains("fadeOut") ){
				target[t].classList.remove("fadeOut");
			}
			if( !target[t].classList.contains("fadeIn") ){
				target[t].classList.add("fadeIn");
			}
		}
	}else{
		return false;
	}
}

/*actions*/
/* Add Class fadeIn to an specific Element
in: el, individual element or group of elements. use  querySelectorAll Logic
return: na
*/
function base_fadeOut(el){
	if (!el){ return false; }
	var target  = document.querySelectorAll(el);
	if ( target.length ){
		for( t = 0; t<target.length; t++){
			if( target[t].classList.contains("fadeIn") ){
				target[t].classList.remove("fadeIn");
			}
			if( !target[t].classList.contains("fadeOut") ){
				target[t].classList.add("fadeOut");
			}
		}
	}else{
		return false;
	}
}

/*Show El Into View ini */
(function(){
	var items = document.getElementsByClassName("showIntoViewport");
	if (items){ 
		for( i=0;i<items.length;i++ ){
			if ( !isScrolledIntoView(items[i]) ){
				items[i].style.opacity="0";
			}
		}
	}
})()

function isScrolledIntoView(el) {
	var rect = el.getBoundingClientRect();
	var elemTop = rect.top;
	var elemBottom = rect.bottom;

	// Only completely visible elements return true:
	var isVisible = (elemTop >= 0) && (elemBottom <= window.innerHeight);
	// Partially visible elements return true:
	//isVisible = elemTop < window.innerHeight && elemBottom >= 0;
	return isVisible;
}

window.addEventListener("scroll",function(){
	var items = document.getElementsByClassName("showIntoViewport");
	if (!items){ return false; }
	for( i=0;i<items.length;i++ ){
		if ( isScrolledIntoView(items[i]) ){
			if ( items[i].classList.contains("efx-fadeIn") && !items[i].classList.contains("fadeIn") ){
				items[i].classList.add("fadeIn");
			}

			if ( items[i].classList.contains("efx-fadeOut") && !items[i].classList.contains("fadeOut") ){
				items[i].classList.add("fadeOut");
			}

			if ( items[i].classList.contains("efx-slideInFromLeft") && !items[i].classList.contains("slideInFromLeft") ){
				items[i].classList.add("slideInFromLeft");
				items[i].style.opacity="1";
			}

			if ( items[i].classList.contains("efx-slideInFromRight") && !items[i].classList.contains("slideInFromRight") ){
				items[i].classList.add("slideInFromRight");
				items[i].style.opacity="1";
			}

		}
	}
});
/*Show El Into View end */