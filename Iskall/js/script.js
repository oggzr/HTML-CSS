(function($){

	//Sticky sidebar

	var _window = $(window);

	var _side = $(".sidebar");

	var _sideTop = _side.offset().top;


	var stickyNav = function(){
		var _scroll = _window.scrollTop();

		if ( _scroll > _sideTop ) {
			_side.addClass("sticky");
		}
		else {
			_side.removeClass("sticky");
		}
	};

	stickyNav();

	$(window).scroll(function(){
		stickyNav();
	});


		//responsive menu

	$(".resp").click(function(){
		$(".respnav").slideToggle();
	});



		//Galleri
	
	$(".slides > img").click(function(){
		var source = $(this).attr("src");

	$("#main").attr("src", source);
	});



})(jQuery);