function criarAnuncioController($scope,$rootScope,$location){

	$scope.initializeAdMap = function() {
	  var center = new google.maps.LatLng(-23.420172,-51.933796);
	  var mapOptions = {
	    center: center,
	    zoom: 12,
	    mapTypeId: google.maps.MapTypeId.ROAD
	  };

	  $scope.adMap = new google.maps.Map(document.getElementById("map_ad"),
	      mapOptions);

	  $scope.adMarker = createDefaultMarker(center);
	  $scope.adMarker.setMap($scope.adMap);
	}

	$scope.insertMarkerMainMap = function(){
		var newMarker = createHouseMarker($scope.adMarker.getPosition(),$scope.description);
		$rootScope.markers.push(newMarker);
		$rootScope.dbMarkers.$add(getMainDataFromMarker(newMarker));
		$location.path('/');
	}
}