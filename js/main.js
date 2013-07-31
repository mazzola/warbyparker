$(document).ready(function() {
	$(window).scroll(function() {
		var depth = $(this).scrollTop();
		var windowHeight = $(this).height();
		// Max width = 800px - 40px padding - 4px border-width
		var lightboxMaxWidth = 756;
		var lightboxMinWidth = lightboxMaxWidth/3;
		var slope = (lightboxMinWidth - lightboxMaxWidth) / (2000 - windowHeight);
		var lightboxWidth = (slope * depth) + lightboxMaxWidth;

		$(".lightbox").width(lightboxWidth);
	});
});
