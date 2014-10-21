$(function(){
			$.stellar({
				horizontalScrolling: false,
			    positionProperty: 'transform'
			});
		});

$(document).ready(function(){

	// hide terrain while loading
	$("#foreground").fadeOut(0);

});

// Once content has loaded, begin rotating blades
$(window).load(function() {

	$("#foreground").fadeIn(0);
    $('#chicken').sprite({fps: 18, no_of_frames: 40});

});
