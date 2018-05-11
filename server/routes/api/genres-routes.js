'use strict';
var await = require('asyncawait/await');
var async = require('asyncawait/async');
var handlers = require(__base + 'server/routes/router-handlers');
var service = require(__base + 'server/services');
var routes = require('express').Router();


function getGenres(request, response) {
    var result;
    try {
        result = await (service.genresService.getGenre(request.params.id));
        return handlers.successResponseHandler(response, result);
    } catch (error) {
    	console.log('error',error);
        return handlers.errorResponseHandler(response, error);
    }
}

function deleteGenre(request, response) {
    var result;
    try {
        result = await (service.genresService.deleteGenre(request.params.id));
        return handlers.successResponseHandler(response, result);
    } catch (error) {
        return handlers.errorResponseHandler(response, error);
    }
}

function updateGenre(request, response) {
    var result;
    try {
        result = await (service.genresService.updateGenre(request.body.genre));
        return handlers.successResponseHandler(response, result);
    } catch (error) {
        return handlers.errorResponseHandler(response, error);
    }
}

function postGenre(request, response) {
    console.log(request.body);
    var result;
    try {
        result = await (service.genresService.postGenre(request.body.genre));
        return handlers.successResponseHandler(response, result);
    } catch (error) {
        if(error.code === 11000){
            return handlers.validationErrorHandler(response, error);
        }
        return handlers.errorResponseHandler(response, error);
    }
}

routes.get('/:id', async(getGenres));
routes.get('/', async(getGenres));
routes.delete('/:id', async(deleteGenre));
routes.put('/:id', async(updateGenre));
routes.post('/', async(postGenre));

module.exports = routes;