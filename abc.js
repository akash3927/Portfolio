/**
 * global $, alert, console
 *
 * @format
 *
 *
 */
$('.loading').delay(1000).addClass('loaded');

// Launching and adjusting NiceScroll plugin //
$('html, body').niceScroll({
	scrollspeed: 40,
	mousescrollstep: 30,
	zindex: 9999,
	cursorwidth: 10,
	cursorborder: false,
	cursorborderradius: 0,
	cursorcolor: '#111',
});

//for nav
$(window).scroll(function () {
	$('#top-nav, #menu').addClass('transition');
	if ($(this).scrollTop() >= 600) {
		$('#top-nav, #menu').addClass('shown');
	} else {
		$('#top-nav, #menu').removeClass('shown');
	}
});
// Adjusting menu  showing and hiding menu on click //
$('#menu').click(function () {
	$(this).toggleClass('active-menu');
	$('#side-menu')
		.toggleClass('active-side-menu')
		.children('a')
		.removeClass('selected-item');
});

// some styles on menu item when clicked //
$('#side-menu a').on('click', function () {
	$(this).addClass('selected-item').siblings().removeClass('selected-item');
});

// controlling side menu //
// smooth scrolling when a link in the menu is clicked //
$("a[href^='#']").on('click', function (event) {
	var target = $($(this).attr('href'));

	if (target.length) {
		event.preventDefault();
		$('html, body').animate(
			{
				scrollTop: target.offset().top,
			},
			1000,
		);
	}
});

//

// Scroll Percentage //
var scrollTimer = null;
$(window).scroll(function () {
	var viewportHeight = $(this).height(),
		scrollbarHeight = (viewportHeight / $(document).height()) * viewportHeight,
		progress = $(this).scrollTop() / ($(document).height() - viewportHeight),
		distance =
			progress * (viewportHeight - scrollbarHeight) +
			scrollbarHeight / 2 -
			$('#scroll').height() / 2;
	$('#scroll')
		.css('top', distance)
		.text(' (' + Math.round(progress * 100) + '%)')
		.fadeIn(100);

	if (scrollTimer !== null) {
		clearTimeout(scrollTimer);
	}
	scrollTimer = setTimeout(function () {
		$('#scroll').fadeOut();
	}, 800);
});

// start easy pie chart plugin when skills section appear //

//

$(document).ready(function () {
	'use-strict';
	$('#skills').appear(
		function () {
			$('.chart').easyPieChart({
				barColor: '#eaeaea',
				trackColor: false,
				scaleColor: false,
				lineWidth: 10,
				lineCap: 'round',
				size: 150,
				animate: 1500,
			});
			// start numbers animate at skills section //
			$('#chart_num_1').animateNumber(
				{
					number: 88,
				},
				1500,
			);
			$('#chart_num_2').animateNumber(
				{
					number: 75,
				},
				1500,
			);
			$('#chart_num_3').animateNumber(
				{
					number: 80,
				},
				1500,
			);
			$('#chart_num_4').animateNumber(
				{
					number: 60,
				},
				1500,
			);
		},
		{
			accX: 0,
			accY: -150,
		},
	);
});

var items = document.querySelectorAll('li');

function isItemInView(item) {
	var rect = item.getBoundingClientRect();
	return (
		rect.top >= 0 &&
		rect.left >= 0 &&
		rect.bottom <=
			(window.innerHeight || document.documentElement.clientHeight) &&
		rect.right <= (window.innerWidth || document.documentElement.clientWidth)
	);
}

function callbackFunc() {
	for (var i = 0; i < items.length; i++) {
		if (isItemInView(items[i])) {
			items[i].classList.add('show');
		}
	}
}

// listen for events
window.addEventListener('load', callbackFunc);
window.addEventListener('resize', callbackFunc);
window.addEventListener('scroll', callbackFunc);

// 	// Moving to About me section on clicking mouse icon //
$('#mouse').on('click', function () {
	$('html, body').animate(
		{
			scrollTop: $('#about-me').offset().top,
		},
		1000,
	);
});

// 	// Adjusting the top nav showing the top nav when scrolling >= 600 //

// 	// Accordion in About-me Section //
$('.acc-title').click(function () {
	$('.acc-title').not(this).removeClass('active');
	$(this).toggleClass('active');
	$(this).siblings('.acc-content').slideToggle(350);
	$('.acc-title').not(this).siblings('.acc-content').slideUp(300);
});

// 	// Back to top button //
// 	// showing the button when scroll > 400  //
var backToTop = $('.back-to-top');
$(window).scroll(function () {
	if ($(this).scrollTop() >= 400) {
		backToTop.addClass('show-button');
	} else {
		backToTop.removeClass('show-button');
	}
});

// back to top on clicking the button //
backToTop.click(function () {
	$('html, body').animate(
		{
			scrollTop: 0,
		},
		1200,
	);
});

// 	// Form Validation in contact section //

// /* Launching Google map */
var swiper = new Swiper('.mySwiper', {
	slidesPerView: 1,
	spaceBetween: 30,
	loop: true,
	pagination: {
		el: '.swiper-pagination',
		clickable: true,
	},
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
});

// // When the window has finished loading create our google map below
google.maps.event.addDomListener(window, 'load', init);

function init() {
	// Basic options for a simple Google Map
	// For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
	var mapOptions = {
		// How zoomed in you want the map to start at (always required)
		zoom: 17,
		styles: [
			{ elementType: 'geometry', stylers: [{ color: '#242f3e' }] },
			{ elementType: 'labels.text.stroke', stylers: [{ color: '#242f3e' }] },
			{ elementType: 'labels.text.fill', stylers: [{ color: '#746855' }] },
			{
				featureType: 'administrative.locality',
				elementType: 'labels.text.fill',
				stylers: [{ color: '#d59563' }],
			},
			{
				featureType: 'poi',
				elementType: 'labels.text.fill',
				stylers: [{ color: '#d59563' }],
			},
			{
				featureType: 'poi.park',
				elementType: 'geometry',
				stylers: [{ color: '#263c3f' }],
			},
			{
				featureType: 'poi.park',
				elementType: 'labels.text.fill',
				stylers: [{ color: '#6b9a76' }],
			},
			{
				featureType: 'road',
				elementType: 'geometry',
				stylers: [{ color: '#38414e' }],
			},
			{
				featureType: 'road',
				elementType: 'geometry.stroke',
				stylers: [{ color: '#212a37' }],
			},
			{
				featureType: 'road',
				elementType: 'labels.text.fill',
				stylers: [{ color: '#9ca5b3' }],
			},
			{
				featureType: 'road.highway',
				elementType: 'geometry',
				stylers: [{ color: '#746855' }],
			},
			{
				featureType: 'road.highway',
				elementType: 'geometry.stroke',
				stylers: [{ color: '#1f2835' }],
			},
			{
				featureType: 'road.highway',
				elementType: 'labels.text.fill',
				stylers: [{ color: '#f3d19c' }],
			},
			{
				featureType: 'transit',
				elementType: 'geometry',
				stylers: [{ color: '#2f3948' }],
			},
			{
				featureType: 'transit.station',
				elementType: 'labels.text.fill',
				stylers: [{ color: '#d59563' }],
			},
			{
				featureType: 'water',
				elementType: 'geometry',
				stylers: [{ color: '#17263c' }],
			},
			{
				featureType: 'water',
				elementType: 'labels.text.fill',
				stylers: [{ color: '#515c6d' }],
			},
			{
				featureType: 'water',
				elementType: 'labels.text.stroke',
				stylers: [{ color: '#17263c' }],
			},
		],

		// The latitude and longitude to center the map (always required)
		center: new google.maps.LatLng(18.9169833, 74.0797095),

		scrollwheel: false,

		// How you would like to style the map.
		// This is where you would paste any style found on Snazzy Maps.
	};

	// Get the HTML DOM element that will contain your map
	// We are using a div with id="map" seen below in the <body>
	var mapElement = document.getElementById('map');

	// Create the Google Map using our element and options defined above
	var map = new google.maps.Map(mapElement, mapOptions);

	// Let"s also add a marker while we"re at it
	var marker = new google.maps.Marker({
		position: new google.maps.LatLng(23.0385, 72.5306),
		//animation:google.maps.Animation.BOUNCE,
		map: map,
		title: 'Marqa Studio',
	});

	var infowindow = new google.maps.InfoWindow({
		content: 'New Lake view society',
	});

	google.maps.event.addListener(marker, 'click', function () {
		infowindow.open(map, marker);
	});
}
