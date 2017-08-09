// Status Indication

var statusIndication = function() {
	var pathName = window.location.pathname;
	var pathArray = pathName.split('/');
	var arrayLength = pathArray.length;
	var href = pathArray[arrayLength-1];
	var directory = pathArray[arrayLength-2];

	var mainMenu = function() {
		var anchor;
		var anchorArray;
		var lengthArray;
		var folder;
		$('.header__nav a').each(function() {
			anchor = $(this).attr('href');
			anchorArray = anchor.split('/');
			lengthArray = anchorArray.length;
			folder = anchorArray[lengthArray-2];
			if (folder == directory) {
				$(this).parent().addClass('active');
			}
		});
	}
	mainMenu();

	var subNavMenu = function() {
		var anchor;
		var anchorArray;
		var lengthArray;
		var link;
		$('.subNav a').each(function() {
			anchor = $(this).attr('href');
			anchorArray = anchor.split('/');
			lengthArray = anchorArray.length;
			link = anchorArray[lengthArray-1];
			if (link == href) {
				$(this).parent().addClass('active');
			}
		});
	}
	subNavMenu();
}
/* statusIndication(); */

// Scroll Magic and TimelineMax

/* var controller = new ScrollMagic.Controller();

var timeline = new TimelineMax();

timeline.to('.class', 0.5, { scale: 1 } );

var scene = new ScrollMagic.Scene({
	triggerElement: '.class',
	triggerHook: 'onCenter'
})
	.setTween(timeline)
	.addTo(controller); */

