module.exports = function(app,passport){
	
	app.isLoggedIn = function (req, res, next) {
		console.log(req.isAuthenticated());
		console.log(req.user);
		if (req.isAuthenticated())
			return next();
		res.redirect('/');
	}

	//Configura as rotas da api e do site
	require('./webpage')(app);
	require('./api')(app);
	require('./auth')(app,passport);
}
