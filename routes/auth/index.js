var logout = function(req, res) {
		req.logout();
		res.redirect('/');
};

module.exports = function(app, passport){
	app.post('/logout', logout);
	
	app.post('/signup', function(req, res, next) {
		passport.authenticate('local-signup', function(err, user, info) {
	    if (err) {
	      return next(err); // will generate a 500 error
	    }
	    if (!user) {
	      return res.send({ success : false, message : 'Falha na criação da conta'});
	    }
	    req.logIn(user, function(err) {
	      if (err) { 
	      	return next(err); 
	      }
	      return res.send({ success : true, message : 'Conta criada com sucesso'});
	    });
  	})(req, res, next);
	});

	app.post('/login', function(req, res, next) {
		passport.authenticate('local-login', function(err, user, info) {
	    if (err) {
	      return next(err); // will generate a 500 error
	    }
	    if (!user) {
	      return res.send({ success : false, message : 'Falha no login'});
	    }
	    req.logIn(user, function(err) {
	      if (err) { 
	      	return next(err); 
	      }
	      return res.send({ success : true, message : 'Login realizado com sucesso'});
	    });
  	})(req, res, next);
	});
};