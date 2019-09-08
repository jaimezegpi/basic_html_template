/* Action on start ini */
base_importScript( "js/fucknimation.js" );
/* Action on start end */

/* Import external Javascript File */
function base_importScript( url ){
	if (url){
		var imported = document.createElement('script');
		imported.src = url;
		document.head.appendChild(imported);
	}
}