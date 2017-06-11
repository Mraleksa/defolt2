var client = require('http-api-client');
var d3 = require("d3");
var sqlite3 = require("sqlite3").verbose();
var db = new sqlite3.Database("data.sqlite");

client.request({
    url: 'https://api.morph.io/Mraleksa/Plans1/data.json?key=kySf3vNeyObyXvbJKG4u&query=select%20*%20from%20%27data%27%20limit%2020'
}).then(function (response) {
    
	console.log(response.getJSON());
});
