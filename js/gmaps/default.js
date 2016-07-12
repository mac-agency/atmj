// GOOGLE MAP - DEFAULT
google.maps.event.addDomListener(window, 'load', init);

function init() {
	var mapOptions = {
		zoom: 11,
		center: new google.maps.LatLng(40.6700, -73.9400), // New York
		styles: [{
			"featureType": "administrative.land_parcel",
			"elementType": "all",
			"stylers": [{
				"visibility": "off"
			}]
		}, {
			"featureType": "landscape.man_made",
			"elementType": "all",
			"stylers": [{
				"visibility": "off"
			}]
		}, {
			"featureType": "poi",
			"elementType": "labels",
			"stylers": [{
				"visibility": "off"
			}]
		}, {
			"featureType": "road",
			"elementType": "labels",
			"stylers": [{
				"visibility": "simplified"
			}, {
				"lightness": 20
			}]
		}, {
			"featureType": "road.highway",
			"elementType": "geometry",
			"stylers": [{
				"hue": "#f49935"
			}]
		}, {
			"featureType": "road.highway",
			"elementType": "labels",
			"stylers": [{
				"visibility": "simplified"
			}]
		}, {
			"featureType": "road.arterial",
			"elementType": "geometry",
			"stylers": [{
				"hue": "#fad959"
			}]
		}, {
			"featureType": "road.arterial",
			"elementType": "labels",
			"stylers": [{
				"visibility": "off"
			}]
		}, {
			"featureType": "road.local",
			"elementType": "geometry",
			"stylers": [{
				"visibility": "simplified"
			}]
		}, {
			"featureType": "road.local",
			"elementType": "labels",
			"stylers": [{
				"visibility": "simplified"
			}]
		}, {
			"featureType": "transit",
			"elementType": "all",
			"stylers": [{
				"visibility": "off"
			}]
		}, {
			"featureType": "water",
			"elementType": "all",
			"stylers": [{
				"hue": "#a1cdfc"
			}, {
				"saturation": 30
			}, {
				"lightness": 49
			}]
		}]

	};

	var mapElement = document.getElementById('map-default');

	var map = new google.maps.Map(mapElement, mapOptions);

	var marker = new google.maps.Marker({
		position: new google.maps.LatLng(40.6700, -73.9400),
		map: map,
		title: 'Snazzy!'
	});
}
