const list = require('lista-impropria-api');

list.testamEmAnimais().then(function(tabela) {
	console.log(tabela);
}, function(err){
	console.log(err);
});

list.naoTestamEmAnimais().then(function(tabela) {
	console.log(tabela);
}, function(err){
	console.log(err);
});