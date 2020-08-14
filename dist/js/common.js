$(document).ready(function() {

	new WOW().init();

	$("#feedback-1,#feedback-2").submit(function() {
		var captcha = grecaptcha.getResponse();
		if (captcha.length == 0) {
			alert("Не пройдена captcha, попробуйте еще раз.")
		} else {
			$.ajax({
				type: "GET",
				url: "mail.php",
				data: $(this).serialize()
			}).done(function() {
				$.magnificPopup.close();
				alert("Ваше сообщение успешно отправено!");
				$('#feedback-1')[0].reset();
				setTimeout(function() {
					$.fancybox.close();
				}, 1000);
			});
		}
		return false;
	});

	$(".scroll").mPageScroll2id();

	$('.slick').slick({
		dots: true,
		infinite: true,
		speed: 600,
		slidesToShow: 1,
	});

	$('.popup-modal').magnificPopup({
		type:'inline',
		midClick: true,
		removalDelay: 350,
		mainClass: 'mfp-fade'
	});

	$('[data-fancybox="images"]').fancybox({
		transitionEffect: "slide",
		loop: false
	});

});