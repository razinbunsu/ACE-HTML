(function( $ ) {
	$( document ).ready(function() {
		$('#videoModal').on('hide.bs.modal', function(e) {    
		    var $if = $(e.delegateTarget).find('iframe');
		    var src = $if.attr('src');
		    $if.attr('src', '');
		    $if.attr('src', src);
		});
		$(window).scroll(function() { 
			if ($(document).scrollTop() > 10) { 
			  $('.site-header').addClass('scrolling'); 
			} else {
			  $('.site-header').removeClass('scrolling'); 
			}
		});
	});
})( jQuery );