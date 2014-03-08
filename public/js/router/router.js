$app.config(function($routeProvider){
	$routeProvider.
 	when('/',{controller:mapController, templateUrl:'/views/map.html'}).
 	when('/criarAnuncio',{controller:criarAnuncioController, templateUrl:'/views/criarAnuncio.html'}).
 	when('/login',{controller:loginController, templateUrl:'/views/login.html'}).
 	when('/signup',{controller:signupController, templateUrl:'/views/signup.html'}).
 	// when('/edit/:name',{controller:editController,templateUrl:'form.html'}).
 	// when('/new',{controller:newController, templateUrl:'form.html'}).
 	otherwise({redirectTo:'/'});
});