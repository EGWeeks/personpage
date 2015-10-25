//Goal: slideshow background images


$(function(){

	//configuration
	var width = 1024;
	var animationSpeed = 2000;
	var pause = 5000;
	var currentImage = 1;

	//cache DOM
	var $slider = $('#imageGallery');
	var $slideContainer = $slider.find('.slide');
	var $slides = $slideContainer.find(".image");

	var interval;

	function startSlider() {
		interval = setInterval(function() {
			$slideContainer.animate({'margin-left': '-='+width}, animationSpeed, function() {
				currentImage++;
				if (currentImage === $slides.length){
					currentImage = 1;
					$slideContainer.css('margin-left', 0);
				};
			});
		}, pause);
	}	

	function stopSlider() {
		clearInterval(interval);
	};

	$slider.on('mouseenter', stopSlider).on("mouseleave", startSlider);

	startSlider();
});
