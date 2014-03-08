function mapController($scope,$rootScope,$firebase){
	var URL = "https://gmapsdb.firebaseio.com";
  // Synchronizing the items on our $scope
  if (!$rootScope.markers){
	  $rootScope.markers = [];
	}
  $rootScope.dbMarkers = $firebase(new Firebase(URL + '/markers'));
  $rootScope.dbMarkers.$on("loaded", function(values) {
  	for (i in values){
  		$scope.addMarker(values[i]);
  	}

  	$rootScope.dbMarkers.$on("change", function(id) {
  		var data = $rootScope.dbMarkers[id];
  		$scope.addMarker(data);
  	});
	  
	  var centro = new google.maps.LatLng(-23.420172,-51.933796);
	  var mapOptions = {
	  	center: centro,
	  	zoom: 12,
	  	mapTypeId: google.maps.MapTypeId.ROAD
	  };
	  $rootScope.mainMap = new google.maps.Map(document.getElementById("map_canvas"),
	  	mapOptions);

  	$scope.loadMarkers();
	});

	$scope.loadMarkers = function(){
		for(i in $rootScope.markers){
  		$rootScope.markers[i].setMap($rootScope.mainMap);
  	}
	}

	$scope.addMarker = function(data){
		var marker = createMarkerFomMainData(data);
		marker.setMap($rootScope.mainMap);
		$rootScope.markers.push(marker);
	}
}