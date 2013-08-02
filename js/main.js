$(document).ready(function() {
	$(window).scroll(function() {
		var pageHeight = 2000;
		/* Lightbox resizing */
		var lightboxMaxWidth = 756; // Max width = 800px - 40px padding - 4px border-width
		var lightboxMinWidth = lightboxMaxWidth/3;
		resizeByScroll(".lightbox", lightboxMaxWidth, lightboxMinWidth, pageHeight);

		/* Image resizing */
		var imageMaxWidth = 100;
		var imageMinWidth = imageMaxWidth/3;
		resizeByScroll(".imagelist img", imageMaxWidth, imageMinWidth, pageHeight);
	});
});

/** Shrinks the specified element linearly based on the current scroll position*/
function resizeByScroll(element, maxwidth, minwidth, pageHeight) {
	var depth = $(window).scrollTop();
	var windowHeight = $(window).height();
	var slope = (minwidth - maxwidth) / (pageHeight - windowHeight);
	var newWidth = (slope * depth) + maxwidth;
	$(element).width(newWidth);
}