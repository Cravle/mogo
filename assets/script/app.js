$(function() {
	var header = $("header");
	var introH = $("#intro").innerHeight();
	var sccrollOffset = $(window).scrollTop();
	// FIXED HEADER
	checkScroll(sccrollOffset);

	$(window).on("scroll", function(){
		sccrollOffset = $(this).scrollTop();

		checkScroll(sccrollOffset);
	});

	function checkScroll(sccrollOffset) {
		
		if (sccrollOffset >= introH - 80) {
			header.addClass("fixed");
		}
		else {
			header.removeClass("fixed");
		}
	}

	/*Smooth Scroll*/

	$("[data-scroll]").on("click", function(event) {
		event.preventDefault();

		var $this = $(this);
		var blockID = $this.data('scroll');
		var blockoffset = $(blockID).offset().top;

		$("nav a").removeClass('active');
		$this.addClass('active');

		$("#nav").removeClass('active');
		$("#nav_toggle").removeClass('active')

		$("html, body").animate({
			scrollTop: blockoffset
		}, 500);

	});

	/*Menu nav Toggle*/
	$("#nav_toggle").on("click", function(event) {
		event.preventDefault();

		$(this).toggleClass("active");
		$("#nav").toggleClass("active");

	});

	// collapse

	$("[data-collapse]").on("click", function(){
		event.preventDefault;
		var $this = $(this);
		var blockID = $this.data('collapse');

		$this.toggleClass('active');

		
	});

	// slider
	$("[data-slider]").slick({
		speed: 600,
		infinite: true,
		fade: true,
		slidesToShow: 1,
		slidesToScroll: 1
	});


});

