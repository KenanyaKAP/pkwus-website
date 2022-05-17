// Collapse Navbar Collapse
$('.page-scroll').on('click', function(){
	$('.navbar-collapse').collapse('hide');
});

// Nav Button
$('.navbar-toggler').on('click', function(){
	if ($(document).scrollTop() <= $('.jumbotrons').offset().top + 50) {
		if ($('.navbar-toggler').attr("aria-expanded") == 'false'){
			$('.navbar').css("background-color", "#141414");
		} else {
			$('.navbar').css("background-color", "#14141400");
		}
	}
});

// Main Event
$(document).ready(function() {

	// Scroll Event
	$('#scrollDiv').hide();
	$(window).scroll(function() {
		// Closing Navbar
		$('.collapsedd').each(function(i, obj) {
			if ($(obj).attr("aria-expanded") == 'true'){
				$($(obj).attr('href')).collapse('hide');
			}
		});
	});

	// On Click Event
	$(document).click(function () {

		// Closing Navbar
		$('.dropdown-toggle.collapsedd').each(function(i, obj) {
			if ($(obj).attr("aria-expanded") == 'true'){
				$($(obj).attr('href')).collapse('hide');
			}
		});

		// alert($('.navbar').css('height'));
	});
});