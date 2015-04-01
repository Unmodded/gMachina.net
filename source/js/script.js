$(function(){
	$.stellar({
		horizontalScrolling: false,
		positionProperty: 'transform'
	});
});

$(window).load(function() {
    $('#chicken').sprite({fps: 18, no_of_frames: 40});
});
