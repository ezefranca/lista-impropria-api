'use strict';
require('es6-promise').polyfill();

var request = require('request');
var cheerio = require('cheerio');

const urlBase = 'https://sites.google.com/a/fabio.co/lista-base/';
const userAgent = 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_2) AppleWebKit/601.3.9 (KHTML, like Gecko) Version/9.0.2 Safari/601.3.9';

exports.testamEmAnimais = function() {

  return new Promise(function(accept, error) {
    var options = {
      url:  urlBase,
      headers: {
        'User-Agent': userAgent
      }
    };

    request(options, function(error, response, html) {
	if (!error && response.statusCode == 200) {
		
		var $ = cheerio.load(html);
		var titles = []
		var produtos = {};

		$('thead').each(function(i, element){
			$(element).children().each(function(j, subElement) {
				$(subElement).children().each(function(k, subSubElement) {
					titles[k] = $(subSubElement).text().toString()
				});
			});     
		});


		$('tbody tr.goog-ws-list-tableRow').each(function(i, element){
			produtos.id = i	
			$(element).children().each(function(i, subElement) {
			produtos[titles[i].toString()] = $(subElement).text().toString()
		});
		console.log("-----------------"); 
		console.log(produtos);      
	});
	accept(produtos);
	} else {
        error({ error:"Não foi possível retornar as informações!" });
    }
});
    });
};
