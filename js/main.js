/* Action on start ini */
var path_url = "";
base_importScript( path_url+"js/fucknimation.js" );
base_importScript( path_url+"js/functions.js" );
/* Action on start end */

/* Import external Javascript File */
function base_importScript( url ){
	if (url){
		var imported = document.createElement('script');
		imported.src = url;
		document.head.appendChild(imported);
	}
}