// Funções de cada rota
var post = function(req, res){
  // Insere no banco
  // req.body.paramName
};

var get = function (req, res){
	// Lista
	// req.params.id
}

var put = function (req, res){
	// Lista
	// req.params.id
}

var deleteMethod = function (req, res){
	// Lista
	// req.params.id
}

// Relaciona as rotas com suas funcções
module.exports = function(app){
	app.post('/api/user', post);
	app.get('/api/user/:id', get);
	app.put('/api/user/:id', put);
	app.delete('/api/user/:id', deleteMethod);
}