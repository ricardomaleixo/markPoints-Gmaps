// Funções de cada rota
var index = function(req, res){
  res.render('index.html');
};

var teste = function(req, res){
  res.send('autenticado');
};
// Relaciona as rotas com suas funcções
module.exports = function(app){
	app.get('/', index);
	app.get('/teste',app.isLoggedIn, teste);
}