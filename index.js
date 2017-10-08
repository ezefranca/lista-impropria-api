'use strict';
require('es6-promise').polyfill();

var request = require('request');
var cheerio = require('cheerio');

const urlBase = 'https://sites.google.com/a/fabio.co/lista-base/';
const urlBase2 = 'https://sites.google.com/a/fabio.co/lista-propria/';
const userAgent = 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_2) AppleWebKit/601.3.9 (KHTML, like Gecko) Version/9.0.2 Safari/601.3.9';

exports.naoTestamEmAnimais = function() {

  return new Promise(function(accept, error) {
    var options = {
      url:  urlBase2,
      headers: {
        'User-Agent': userAgent
      }
    };

    request(options, function(error, response, html) {
	if (!error && response.statusCode == 200) {
		
		var $ = cheerio.load(html);
		var titles = []
		var produto = {};
		var produtos = [];

		$('thead').each(function(i, element){
			$(element).children().each(function(j, subElement) {
				$(subElement).children().each(function(k, subSubElement) {
					var title = $(subSubElement).text();
					titles[k] = String(title).replace(/'/g, '');
				});
			});     
		});

		var x = 0;
		$('tbody tr.goog-ws-list-tableRow').each(function(i, element){
			produto['id'] = i	
			$(element).children().each(function(j, subElement) {
				var propriedade = String($(subElement).text()).replace(/2/g, '2')
				produto[titles[j]] = propriedade.slice(0, -1)
			});	
		produtos[x] = produto;
		produto = {};
		x++;     
	});
	accept(JSON.stringify(produtos));
	} else {
        error({ error:"Não foi possível retornar as informações!" });
    }
});
    });
};


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
		var produto = {};
		var produtos = [];

		$('thead').each(function(i, element){
			$(element).children().each(function(j, subElement) {
				$(subElement).children().each(function(k, subSubElement) {
					var title = $(subSubElement).text();
					titles[k] = String(title).replace(/'/g, '');
				});
			});     
		});

		var x = 0;
		$('tbody tr.goog-ws-list-tableRow').each(function(i, element){
			produto['id'] = i	
			$(element).children().each(function(j, subElement) {
				var propriedade = String($(subElement).text()).replace(/2/g, '2')
				produto[titles[j]] = propriedade.slice(0, -1)
			});	
		produtos[x] = produto;
		produto = {};
		x++;     
	});
    //console.log(produtos.length);
	accept(JSON.stringify(produtos));
	} else {
        error({ error:"Não foi possível retornar as informações!" });
    }
});
    });
};
