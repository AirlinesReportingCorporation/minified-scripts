import 'jquery';
import 'featherlight';
import 'leaflet';
import 'odometer';
import 'owl.carousel';
import ScrollReveal from 'scrollreveal'
import 'typeit';
var Isotope = require('isotope-layout');

//var jq = jquery.noConflict( true );

$(document).ready(function(){

		//jumbotron code
		$('.jumbotron__inside .block-header').html('<div><a href="http://arctravelconnect.com" class="logo travelconnectlogo icon-travelconnect-logo" title="logo"></a></div><span id="statsText"></span>');
		$('.jumbotron .foreground .body').show();
		$('.jumbotron .foreground .ctaBtn').css('display', 'inline-block');

		//scrolling text code
		$('#statsText').typeIt({
			breakLines: false,
			autoStart: false,
			loop: true,
			lifeLike: true,
			speed: 100
		}).tiType('Distribution Trends').tiPause(1000)
		.tiDelete()
		.tiType('Air Travel Insights').tiPause(1000)
		.tiDelete()
		.tiType('New Business Models').tiPause(1000)
		.tiDelete()
		.tiType('Technology Shifts').tiPause(1000)
		.tiDelete()
		.tiType('Fresh Persepectives').tiPause(1000)
		.tiDelete()
		.tiPause(500);

		//Photo Carousel
		/* commented out until photo block is put back on
		$(".owl-carousel").owlCarousel({
			items:1,
			loop: true,
			margin: 10,
			autoplay: true,
			animateOut: 'fadeOut',
			animateIn: 'fadeIn',
			smartSpeed:550,
			autoplayTimeout:6500,
			nav:true,
			dots: false,
			responsive:{
				0:{
					items:1
				},
				768:{
					items:3
				},
										960:{
														items:3
										}

			},
			autoplayHoverPause:true,
			navText : ['<i class="fa fa-angle-left" aria-hidden="true"></i>','<i class="fa fa-angle-right" aria-hidden="true"></i>']
		});*/

		//scroll reveal
		window.sr = ScrollReveal({ reset: true });
		sr.reveal('section .foreground', { duration: 1000 });
		sr.reveal('.page-grid', { duration: 1000 });
		sr.reveal('.blockquote', {duration: 1000});
		sr.reveal('.contained-panel__innerContent', { duration: 1000 });
		//sr.reveal('.iso-title', { duration: 1000 });
		sr.reveal('.stats', { 
				duration: 1000, 
				animation: 'count',
				beforeReveal: function (e){
							 $(".stats1 span").html(400);
							 $(".stats2 span").html(162);
							 $(".stats3 span").html(35);
							 $(".stats4 span").html(43);    
							 $(".stats5 span").html(77);               
				},
				 beforeReset: function (e){
							 $(".stats1 span").html(400);
							 $(".stats2 span").html(162);
							 $(".stats3 span").html(35);
							 $(".stats4 span").html(43);        
							 $(".stats5 span").html(77);
				},
				afterReset: function (e){
							 $(".stats1 span").html(0);
							 $(".stats2 span").html(0);
							 $(".stats3 span").html(0);
							 $(".stats4 span").html(0);        
				},
				format: 'd'

		});

		//highlight isotope grid init
		/*
		$('.iso-grid').Isotope({
			// options
			itemSelector: '.card',
			layoutMode: 'fitRows'
		});*/
		
		var elem = document.querySelector('.iso-grid');
		var iso = new Isotope( elem, {
			// options
			itemSelector: '.card',
			layoutMode: 'fitRows'
		});


	//google map grid init
	var mymap = L.map('mapid', {scrollWheelZoom: false}).setView([38.780, -77.017], 11);
	var marker = L.marker([38.780, -77.017], {riseOnHover: true}).addTo(mymap);

	marker.bindTooltip("<strong>Gaylord National Resort & Convention Center</strong><br/>TravelConnect 2018<br/>", {permanent: true }).openTooltip();

	L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
			maxZoom: 15,
			id: 'mapbox.streets',
			scrollWheelZoom: false,
			accessToken: 'pk.eyJ1IjoiaWZhamFyZG8iLCJhIjoiY2o4MGJ5dHl3MjBpbzMzczBwd3EyeWV6ZiJ9.9LHEjhURIT4WFRpfc-rQRA'
	}).addTo(mymap);


	//get param function
	var getUrlParameter = function getUrlParameter(sParam) {
			var sPageURL = decodeURIComponent(window.location.search.substring(1)),
					sURLVariables = sPageURL.split('&'),
					sParameterName,
					i;

			for (i = 0; i < sURLVariables.length; i++) {
					sParameterName = sURLVariables[i].split('=');

					if (sParameterName[0] === sParam) {
							return sParameterName[1] === undefined ? true : sParameterName[1];
					}
			}
	};

	//form pop-up message set-up
	var a = "<div class='fl-title'><div class='animated bounce'><img src='/globalassets/home2/thank-you/carrier.png'></div></div>";

	var b = "<div class='fl-title'><div class='animated bounce'><img src='/globalassets/home2/thank-you/distribution.png'></div></div>";

	var c = "<div class='fl-title'><div class='animated bounce'><img src='/globalassets/home2/thank-you/EMDs.png'></div></div>";

	var e = "<div class='submission'><h3>Thank you for your interest in becoming a sponsor! <h3/>We look forward to working with you at TravelConnect 2018.</div>";

	var f = "<div class='submission'><h3>Thank you for your interest in becoming a speaker! <h3/>We will contact you when we begin the content selection process for TravelConnect 2018.</div>";

	var g = "<div class='submission'><h3>You are now connected! <h3/>We’ll keep you informed on the latest TravelConnect 2018 updates.</div>";

	e = b + e;
	f = a + f;
	g = c + g;

        $.featherlight.defaults.root = $(".featherlight-holder")

	if(getUrlParameter("sponsors") == "true"){
		
		$("a.sticky-nav__link").eq(1).click();
		$.featherlight($(e), {});

	}

	if(getUrlParameter("connect") == "true"){
		$("a.sticky-nav__link").eq(3).click();
		$.featherlight($(g), {});
	}

	if(getUrlParameter("speakers") == "true"){
		$("a.sticky-nav__link").eq(2).click();
		$.featherlight($(f), {});
	}

	//captcha

	$("[src='https://www.google.com/recaptcha/api.js']").remove();
	var s = document.createElement("script");
	s.type = "text/javascript";
	s.src = "https://www.google.com/recaptcha/api.js?onload=CaptchaCallback&render=explicit";
	s.defer = true;
	s.async = true;
	$("body").append(s);




			var widget1;
			var widget2;
			var CaptchaCallback = function() {
					widget1 = grecaptcha.render('RecaptchaField1', {'sitekey' : '6LctuhgUAAAAAGnwAxFKCp0Sfk4lUvYWhmoNqJwp'});
					widget2 = grecaptcha.render('RecaptchaField2', {'sitekey' : '6LdCD$UAAAAANAD5XfBVaD1Isd3zNkwcyKcADSi'});
			};


	 function validateCaptcha(formId, widget) {
					var Response = grecaptcha.getResponse(window[widget]);
					if (Response != null && Response != undefined && Response != "" && Response.length > 0) {
						 $("#formId").submit();
					} else {
							$("#" + widget).addClass('RecaptchaError');
							event.preventDefault();
							return false;
					}
					
					return false;

			}




});	

