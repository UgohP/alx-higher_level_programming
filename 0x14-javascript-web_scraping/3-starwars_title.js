#!/usr/bin / node

const request = require('request');

const starWarsUrl = 'https://swapi-api.alx-tools.com/api/films/:id' + process.argv[2];

request(starWarsUrl, function (error, response, body) {
    console.log(error || JSON.parse(body).title);
});
