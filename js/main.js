$(document).ready(function(){
	$("#carouselll").waterwheelCarousel({separation:170,horizonOffset:0,keyboardNav:true,linkHandling:1,trackerIndividual:true,opacityMultiplier:1,smallFeatureOffset:0,forcedImageHeight:350,forcedImageWidth:200});
	$('#prev').bind('click', function () {
          carousel.prev();
          return false
        });

        $('#next').bind('click', function () {
          carousel.next();
          return false;
        });
});
$(document).ready(function(){
  // Add smooth scrolling to all links
  $("a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 1100, function(){
   
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
});
$(document).click(function(e) {
	if (!$(e.target).is('a')) {
    	$('.collapse').collapse('hide');	    
    }
});


