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