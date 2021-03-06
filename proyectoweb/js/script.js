  JQuery(document).ready(function($){
  // TEXTO ROTARIO
  $("#inicio .rotating").Morphext({
    animation: "flipInX",
    separator: ",",
    speed: 3000
 });
  // TEXTO ROTATORIO END
	$(".owl-1").owlCarousel({
		autoWidth: false,
		items: 1,
		loop: true,
		margin: 10,
		autoplay: true,
		autoplayTimeout: 3000,
		autoplayHoverPause: true,
		responsiveClass: true,
		responsive: {
			0: {
				items: 1,
				nav: false
			},
			576: {
				items: 1,
				nav: false
			},
			992: {
				items: 1,
				nav: false
			},
			1200: {
				items: 1,
				nav: false
			}
		}
	});
	$(".owl-2").owlCarousel({
		items: 3,
		loop: true,
		margin: 10,
		responsiveClass: true,
		responsive: {
			0: {
				items: 1,
				nav: true
			},
			576: {
				items: 1,
				nav: true
			},
			992: {
				items: 3,
				nav: true
			},
			1200: {
				items: 3,
				nav: true
			}
		}
	});
	var owl = $('.owl-carousel');
	owl.on('mousewheel', '.owl-stage', function (e) {
		if (e.deltaY>0) {
			owl.trigger('next.owl');
		} else {
			owl.trigger('prev.owl');
		}
		e.preventDefault();
	});
/* END OF OWL CAROUSEL */
/* COUNTER UP */
	$('.counter-up').counterUp({
		delay: 10,
		time: 5000,
		offset: 100,
		beginAt: 0,
		formatter: function (n) {
			return n.replace(/,/g, '.');
		}
	});
/* END OF COUNTER UP */
/* WOW */
	new WOW().init();
/* END OF WOW */
/* NAVIGATION BAR */
	$(window).scroll(function() {
	    if ($(this).scrollTop() > 10 ) {
	        $('#navbar').addClass('solid');
	    } else {
	        $('#navbar').removeClass('solid');
	    }
	    if ($(this).scrollTop() <= 0 ) {
	    	$('#navbar').hide();
	    }
	    else{
	    	$('#navbar').show();
	    }
	});
/* SMOOTH SCROLL */
		// Add smooth scrolling to all links
		$("a").on('click', function(event) {
			if (this.hash !== "") {
			  event.preventDefault();
			  var hash = this.hash;
			  $('html, body').animate({
			    scrollTop: $(hash).offset().top
			  }, 800, function(){
			    window.location.hash = hash;
			  });
			}
		});
/* END OF SMOOTH SCROLL */
/* END OF NAVIGATION BAR */
/* SCROLL TOP */
$(window).scroll(function() {
    if ($(this).scrollTop() > 50 ) {
        $('.scrolltop:hidden').stop(true, true).fadeIn();
    } else {
        $('.scrolltop').stop(true, true).fadeOut();
    }
});
$(function(){
	$(".scroll").click(function(){
		$("html,body").animate({
			scrollTop:$(".thetop").offset().top - 0
		},3000, 'easeInOutExpo');
		return false;
	})
});
});
/* END OF SCROLL TOP */
function cargarUser() {
	if (sessionStorage.getItem("nomUser") !== null) {
	$("#vacio").css("display","inherit");
	document.getElementById('vacio').innerHTML = "Perfil de " + sessionStorage.getItem("nomUser");
	$("#vacio").css("border","1px solid");
	$("#vacio").css("border-color","white");

	$("#login").css("display","none");
	$("#logout").css("display","initial");

}
}

function logout() {
	sessionStorage.removeItem("nomUser");
	window.alert("Cerrado exitosamente.");
	$("#vacio").css("display","none");

	$("#login").css("display","initial");
	$("#logout").css("display","none");

}
/* END OF CUSTOM JS */