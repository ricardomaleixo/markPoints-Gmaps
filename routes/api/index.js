module.exports = function(app){
	// Importa os módulos de todas as rotas da api
	require('./user')(app);
}