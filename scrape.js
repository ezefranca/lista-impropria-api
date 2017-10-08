var request = require('request');
var cheerio = require('cheerio');

request('https://sites.google.com/a/fabio.co/lista-base/', function (error, response, html) {
	if (!error && response.statusCode == 200) {
		
		var $ = cheerio.load(html);
		var titles = []
		var produto = {};

		$('thead').each(function(i, element){
			$(element).children().each(function(j, subElement) {
				$(subElement).children().each(function(k, subSubElement) {
					titles[k] = $(subSubElement).text().toString()
				});
			});     
		});


		$('tbody tr.goog-ws-list-tableRow').each(function(i, element){
			produto.id = i	
			$(element).children().each(function(i, subElement) {
				produto[titles[i].toString()] = $(subElement).text().toString()
			});
		console.log(produto);      
	});
	}
});