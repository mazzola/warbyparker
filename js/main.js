$(document).ready(function() {
	$(window).scroll(function() {
		var pageHeight = 2000;
		var depth = $(this).scrollTop();
		var windowHeight = $(this).height();
		/* Lightbox resizing */
		// Max width = 800px - 40px padding - 4px border-width
		var lightboxMaxWidth = 756;
		var lightboxMinWidth = lightboxMaxWidth/3;
		var slope = (lightboxMinWidth - lightboxMaxWidth) / (pageHeight - windowHeight);
		var lightboxWidth = (slope * depth) + lightboxMaxWidth;
		$(".lightbox").width(lightboxWidth);

		/* Image resizing */
		var imageMaxWidth = 100;
		var imageMinWidth = imageMaxWidth/3;
		var imgresizeSlope = (imageMinWidth - imageMaxWidth) / (pageHeight - windowHeight);
		var imageWidth = (imgresizeSlope * depth) + imageMaxWidth;
		$(".imagelist img").width(imageWidth);
	});
});