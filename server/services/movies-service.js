'use strict';
var async = require('asyncawait/async');
var await = require('asyncawait/await');
var MovieRsrc = require(__base + 'server/infrastructure/resources').movie;

function getMovie(id) {
    var result;
    try {
    	if(id){
        	result = await (MovieRsrc.getMovie(id));
        } else {
        	result = await (MovieRsrc.getMovies());
        }   
    } catch(error) {
        throw error;
    }
    return { movie: result };
}

function updateMovie(movie) {
    var result;
    try {
        result = await (MovieRsrc.updateMovie(movie));
    } catch(error) {
        throw error;
    }
    return { movie: result };
}

function deleteMovie(id) {
    var result;
    try {
        result = await (MovieRsrc.deleteMovie(id));
    } catch(error) {
        throw error;
    }
    return { movie: result };
}

function postMovie(movie) {
    var result;
    try {
        result = await (MovieRsrc.addMovie(movie));
    } catch(error) {
        console.log('error');
        console.log(error);
        throw error;
    }
    return { movie: result };
}

module.exports.getMovie = async(getMovie);
module.exports.updateMovie = async(updateMovie);
module.exports.deleteMovie = async(deleteMovie);
module.exports.postMovie = async(postMovie);