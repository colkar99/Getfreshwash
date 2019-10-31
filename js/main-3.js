(function ($) {
  "use strict";
  
  // Preloader
  $(window).on('load', function () {
    if ($('#preloader').length) {
      $('#preloader').delay(100).fadeOut('slow', function () {
        $(this).remove();
      });
	}

  });

  // Back to top button
  $(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
      $('.back-to-top').fadeIn('slow');
    } else {
      $('.back-to-top').fadeOut('slow');
    }
  });
  $('.back-to-top').click(function(){
    $('html, body').animate({scrollTop : 0},1500, 'easeInOutExpo');
    return false;
  });
  
	var nav = $('nav');
	var navHeight = nav.outerHeight();

	/*--/ ScrollReveal /Easy scroll animations for web and mobile browsers /--*/
	window.sr = ScrollReveal();
	sr.reveal('.foo', { duration: 1000, delay: 15 });

	/*--/ Carousel owl /--*/
	$('#carousel').owlCarousel({
		loop: true,
		margin: -1,
		items: 1,
		nav: true,
		navText: ['<i class="ion-ios-arrow-back" aria-hidden="true"></i>', '<i class="ion-ios-arrow-forward" aria-hidden="true"></i>'],
		autoplay: true,
		autoplayTimeout: 3000,
		autoplayHoverPause: true
	});

	/*--/ Animate Carousel /--*/
	$('.intro-carousel').on('translate.owl.carousel', function () {
		$('.intro-content .intro-title').removeClass('zoomIn animated').hide();
		$('.intro-content .intro-price').removeClass('fadeInUp animated').hide();
		$('.intro-content .intro-title-top, .intro-content .spacial').removeClass('fadeIn animated').hide();
	});

	$('.intro-carousel').on('translated.owl.carousel', function () {
		$('.intro-content .intro-title').addClass('zoomIn animated').show();
		$('.intro-content .intro-price').addClass('fadeInUp animated').show();
		$('.intro-content .intro-title-top, .intro-content .spacial').addClass('fadeIn animated').show();
	});

	/*--/ Navbar Collapse /--*/
	$('.navbar-toggle-box-collapse').on('click', function () {
		$('body').removeClass('box-collapse-closed').addClass('box-collapse-open');
	});
	$('.close-box-collapse, .click-closed').on('click', function () {
		$('body').removeClass('box-collapse-open').addClass('box-collapse-closed');
		$('.menu-list ul').slideUp(700);
	});

	/*--/ Navbar Menu Reduce /--*/
	$(window).trigger('scroll');
	$(window).bind('scroll', function () {
		var pixels = 50;
		var top = 1200;
		if ($(window).scrollTop() > pixels) {
			$('.navbar-default').addClass('navbar-reduce');
			$('.navbar-default').removeClass('navbar-trans');
		} else {
			$('.navbar-default').addClass('navbar-trans');
			$('.navbar-default').removeClass('navbar-reduce');
		}
		if ($(window).scrollTop() > top) {
			$('.scrolltop-mf').fadeIn(1000, "easeInOutExpo");
		} else {
			$('.scrolltop-mf').fadeOut(1000, "easeInOutExpo");
		}
	});

	/*--/ Property owl /--*/
	$('#property-carousel').owlCarousel({
		loop: true,
		margin: 30,
		responsive: {
			0: {
				items: 1,
			},
			769: {
				items: 2,
			},
			992: {
				items: 3,
			}
		}
	});

	/*--/ Property owl owl /--*/
	$('#property-single-carousel').owlCarousel({
		loop: true,
		margin: 0,  
		nav: true,
		navText: ['<i class="ion-ios-arrow-back" aria-hidden="true"></i>', '<i class="ion-ios-arrow-forward" aria-hidden="true"></i>'],
		responsive: {
			0: {
				items: 1,
			}
		}
	});

	/*--/ News owl /--*/
	$('#new-carousel').owlCarousel({
		loop: true,
		margin: 30,
		responsive: {
			0: {  
				items: 1,
			},
			769: {
				items: 2,
			},
			992: {
				items: 3,
			}
		}
	});

	/*--/ Testimonials owl /--*/
	$('#testimonial-carousel').owlCarousel({
		margin: 0,
		autoplay: true,
		nav: true,
		animateOut: 'fadeOut',
		animateIn: 'fadeInUp',
		navText: ['<i class="ion-ios-arrow-back" aria-hidden="true"></i>', '<i class="ion-ios-arrow-forward" aria-hidden="true"></i>'],
		autoplayTimeout: 4000,
		autoplayHoverPause: true,
		responsive: {
			0: {
				items: 1,
			}
		}
	});

})(jQuery);
var maruthi = [{id:0,value:"Dezire"},{id:1,value:"swift"},{id:1,value:"alto"}];
var nissan = [{id:0,value:"active"},{id:1,value:"micro"},{id:1,value:"duster"}]; 
var dutsun = [{id:0,value:"Ready go"},{id:1,value:"Ready go +"},{id:1,value:"Test"}]; 
function myFunction(event){
	debugger
	let options; 
	if(event.target.value === "Maruthi"){
		options = maruthi;
	}
	else if(event.target.value === "Nissan"){
		options = nissan;
	}
	else if(event.target.value === "Dutsun"){
		options = dutsun;
	}

	loadDropdown(options)
}
function loadDropdown(options){
	var select = document.getElementById("carVariety"); 
	select.innerHTML = null;
	for(let option of options){
		var opt = option.value;
		var el = document.createElement("option");
		el.textContent = opt;
		el.value = opt;
		select.appendChild(el);
	}
}
function bookingForm(event){
	debugger
	let obj = loadFormValue();
	console.log(obj);
	$.ajax({
		headers: {
			'Access-Control-Allow-Origin':'*',
			'Content-Type':'application/json'
		},
		url: "https://api.ezclean.co.in/api/order/web-order",
		type: "post",
		data: JSON.stringify(obj),
		success: function(d) {
			console.log(d)
		},
		error: function(d){
			console.log(d);
		}
		
		
	});
	var element = document.getElementById("body");
	element.setAttribute('class',"box-collapse-closed");
 	// element.class = "close-box-collapse right-boxed ion-ios-close";
	// element.click();
  

}
function loadFormValue(){
	let params = (new URL(document.location)).searchParams;
	let obj = {preferDateTime:{}};
	obj['carModel'] = document.getElementById('carModel').value;
	obj['carVariety'] = document.getElementById('carVariety').value;
	obj.preferDateTime['preferDate'] = document.getElementById('preferDate').value;
	obj.preferDateTime['preferTime'] = document.getElementById('preferTime').value;
	obj['name'] = document.getElementById('name').value;
	obj['mobileNo'] = document.getElementById('mobileNo').value;
	obj['email'] = document.getElementById('email').value;
	obj['washType'] = document.getElementById('washType').value;
	obj['isDoorStep'] = true;
	obj['houseType'] = document.getElementById('houseType').value;
	obj['orderFrom'] = params.get('orderFrom') || "organic";
	return obj;
}
loadDropdown(maruthi);