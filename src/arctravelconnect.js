import 'jquery';
import 'featherlight';
import 'leaflet';
import 'odometer';
import ScrollReveal from 'scrollreveal'
import 'typeit';
var Isotope = require('isotope-layout');

(function(){

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
		.tiType('Fresh Perspective').tiPause(1000)
		.tiDelete()
		.tiPause(500);

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

	
	$( document ).ready(function() {
	
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

		$.featherlight.defaults.root = $(".featherlight-holder");

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
		
		if(getUrlParameter("link") == "highlights"){
			$("a.sticky-nav__link").eq(0).click();
		}
		
		if(getUrlParameter("link") == "sponsors"){
			$("a.sticky-nav__link").eq(1).click();
		}

		if(getUrlParameter("link") == "speakers"){
			$("a.sticky-nav__link").eq(2).click();
		}
	
	});

})(); 

