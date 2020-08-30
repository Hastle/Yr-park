var onLoadHandler = function() {
	captcha = grecaptcha.render('captcha', {
		'sitekey' : '6LcKa8AZAAAAAKsNJVeeDPsQqnohAHz7f9f6EZGe',
		'theme': 'light'
	});
}

$(document).ready(function() {

	wow = new WOW({
		mobile: false
	})

	wow.init();

	$("#feedback-1").submit(function() {
		var response = grecaptcha.getResponse(captcha);
		if (response.length == 0) {
			alert("Не пройдена captcha, попробуйте еще раз.")
		} else {
			$.ajax({
				type: "GET",
				url: "mail.php",
				data: $(this).serialize()
			}).done(function() {
				$.magnificPopup.close();
				alert("Ваше сообщение успешно отправено!");
				$("#feedback-1")[0].reset();
				grecaptcha.reset();
				setTimeout(function() {
					$.fancybox.close();
				}, 1000);
			});
		}
		return false;
	});

	$(".scroll").mPageScroll2id();


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

	$(".a-menu").click(function() {
		$(".ham,.hamRotate,.ham1").classList.toggle('active');
	});

});