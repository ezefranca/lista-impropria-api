# API simples Lista Imprópria (Produtos que fazem testes em animais)

[![npm](https://img.shields.io/npm/v/lista-impropria-api.svg)](https://www.npmjs.com/package/lista-impropria-api)
[![npm](https://img.shields.io/npm/dm/lista-impropria-api.svg)](https://www.npmjs.com/package/lista-impropria-api)

O **lista-impropria-api** é um módulo para consulta da lista de empresas listadas como impróprias pelo portal Vista-se.

## Instalação

```npm install lista-impropria-api --save ```

## Exemplos

### Lista de produtos que testam em animais

```js

const list = require('lista-impropria-api');

list.testamEmAnimais().then(function(tabela) {
	console.log(tabela);
}, function(err){
	console.log(err);
});
```

#### Objeto de Retorno

```js
[{
	"id": 0,
	"Produto": "Acuvue",
	"Tipo de produto": "Lentes de Contato",
	"Fabricante": "Johnson & Johnson",
	"Segmento": "Saúde",
	"Adicionado/modificado": "2 de outubro de 2017"
}]
```

#### Objeto de erro

```js
{ error: 'Não foi possível retornar as informações!' }
```
