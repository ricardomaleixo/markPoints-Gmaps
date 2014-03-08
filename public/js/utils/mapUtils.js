function createHouseMarker(aPosition,aDescription){
	var marker = new google.maps.Marker({
		position: aPosition,
		animation: google.maps.Animation.DROP,
		icon: 'images/icons/pins/32/pin2.png',
		title: 'Casa',
		draggable : false
	});

	insertInfoWindow(marker,aDescription);
	return marker;
}

function createDefaultMarker(aPosition){
	var marker = new google.maps.Marker({
		position: aPosition,
		animation: google.maps.Animation.DROP,
		draggable : true
	});
	return marker;
}

function insertInfoWindow(aMarker,aContent){
	var infowindow = new google.maps.InfoWindow();
	aMarker.content = aContent;
	google.maps.event.addListener(aMarker, 'click', function() {
		infowindow.setContent(aContent);
		infowindow.open(aMarker.getMap(), this);
	});
}

function getMainDataFromMarker(aMarker){
	return {
		content: aMarker.content,
		title: aMarker.getTitle(),
		icon: aMarker.getIcon(),
		position: {
			latitude: aMarker.getPosition().d,
			longitude: aMarker.getPosition().e
		}
	}
}

function createMarkerFomMainData(aMainData){
	var newPosition = new google.maps.LatLng(
		aMainData.position.latitude,
		aMainData.position.longitude
	);
	
	var marker = new google.maps.Marker({
		position: newPosition,
		animation: google.maps.Animation.DROP,
		icon: aMainData.icon,
		title: aMainData.title,
		draggable : false
	});

	insertInfoWindow(marker,aMainData.content);

	return marker;
}