var $ = jQuery;

$('#topMenu').prepend('<button class="menu-toggler"><span></span><span></span><span></span></button>');
$(".menu-toggler").on('click', function () {
	$('#topMenu>ul').toggleClass("active");
})

if ($(window).width() > 768) {
	$(".menuNewItem").hover(function() {
		$(this).addClass("hovered");
	}, function() {
		$(this).removeClass("hovered");
	});
} else if ($(window).width() < 767) {
	$(".parentNew i").on('click', function () {
		$(this).parent().parent().parent().toggleClass("opened");
		return false;
	})
}




$(document).on('ready', function(){
	'use strict';

	$('#pageUp').on('click', function(){
		Template.pageUp();
	});

	$('.catalogItemInfo').on('click', function(){
		var infoBlock = $(this).parents('.catalogItem').find('.catalogItemInfoBlock');

		infoBlock.toggleClass('open');
	});	

	// Открытие картинок
	if (typeof($.fn.fancybox) !== "undefined") {
		$(".fancybox").fancybox({
			helpers: {
				overlay: {
					locked: false
				}
			}
		});
	}

	// Слайдеры
	if (typeof($.fn.slick) !== "undefined") {
		$('.slickSlider:not(.four-items)').slick();

		

		$('.slickSlider.four-items').each(function () {
			$(this).slick({
				slidesToShow: 4,
				arrows: true,
				dots: false,
				infinite: false,
				slidesToScroll: 1,
				responsive: [{
					breakpoint: 1210,
					settings: {
						slidesToShow: 3
					}
				}, {
					breakpoint: 992,
					settings: {
						slidesToShow: 2
					}
				}, {
					breakpoint: 576,
					settings: {
						slidesToShow: 1
					}
				}]
			});
		});

		$('#banners').slick({
			arrows: false,
			autoplay: true,
			autoplaySpeed: 3000
		});
		$('.brandCarousel').slick({
			arrows: true,
			autoplay: false,
			slidesToShow: 4,
			responsive: [{
				breakpoint: 1210,
				settings: {
					slidesToShow: 4
				}
			}, {
				breakpoint: 992,
				settings: {
					slidesToShow: 2
				}
			}, {
				breakpoint: 576,
				settings: {
					slidesToShow: 1
				}
			}]

		});
		$('.aboutCertCarousel').slick({
			arrows: true,
			autoplay: false,
			slidesToShow: 4,
			responsive: [{
				breakpoint: 1210,
				settings: {
					slidesToShow: 4
				}
			}, {
				breakpoint: 992,
				settings: {
					slidesToShow: 2
				}
			}, {
				breakpoint: 576,
				settings: {
					slidesToShow: 1
				}
			}]

		});
		
	}

	/*if (typeof($.fn.mask) !== "undefined") {
		$('input[type="tel"]').mask('00000000000');
	}*/
});

$(window).on('scroll', function(){
	'use strict';

	Template
		.pageUpButFade();

});