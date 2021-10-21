//Javascript

$(function () {

	$('.navbar').each(function(){
		var navbarOffsetTop = $('.navbar').offset().top;
		$(window).scroll(function(){
			if ($(window).scrollTop() > navbarOffsetTop) {
				$('.navbar, #tagList').addClass('sticky');
			} else {
                $('.navbar, #tagList').removeClass('sticky');
			}
		});
	});

    $('.navbar li a').click(function(){
        $('.navbar li').removeClass('active');
        $(this).parent().addClass('active');
    });

/*     $('#tagList a').click(function (e) {
        e.preventDefault();
        var pos = $(this).attr('href');
        $('.content iframe').attr({ src: pos });
    }); */

    $('#accordion').accordion();
});