var client = require('http-api-client');
var d3 = require("d3");
var sqlite3 = require("sqlite3").verbose();
var db = new sqlite3.Database("data.sqlite");

client.request({
    url: 'https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?valcode=USD&date=20161215&json'
}).then(function (response) {
    
	console.log(response.getJSON());
});
