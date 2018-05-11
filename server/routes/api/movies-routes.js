'use strict';
var await = require('asyncawait/await');
var async = require('asyncawait/async');
var handlers = require(__base + 'server/routes/router-handlers');
var service = require(__base + 'server/services');
var routes = require('express').Router();


function getMovies(request, response) {
    var result;
    try {
        result = await (service.moviesService.getMovie(request.params.id));
        return handlers.successResponseHandler(response, result);
    } catch (error) {
    	console.log('error',error);
        return handlers.errorResponseHandler(response, error);
    }
}

function deleteMovie(request, response) {
    var result;
    try {
        result = await (service.moviesService.deleteMovie(request.params.id));
        return handlers.successResponseHandler(response, result);
    } catch (error) {
        return handlers.errorResponseHandler(response, error);
    }
}

function updateMovie(request, response) {
    var result;
    try {
        result = await (service.moviesService.updateMovie(request.body.movie));
        return handlers.successResponseHandler(response, result);
    } catch (error) {
        return handlers.errorResponseHandler(response, error);
    }
}

function postMovie(request, response) {
    var result;
    try {
        result = await (service.moviesService.postMovie(request.body.movie));
        return handlers.successResponseHandler(response, result);
    } catch (error) {
        if(error.code === 11000){
            return handlers.validationErrorHandler(response, error);
        }
        return handlers.errorResponseHandler(response, error);
    }
}

routes.get('/:id', async(getMovies));
routes.get('/', async(getMovies));
routes.delete('/:id', async(deleteMovie));
routes.put('/:id', async(updateMovie));
routes.post('/', async(postMovie));

module.exports = routes;