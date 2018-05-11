'use strict';
var async = require('asyncawait/async');
var await = require('asyncawait/await');
var GenreRsrc = require(__base + 'server/infrastructure/resources').genre;

function getGenre(id) {
    var result;
    try {
    	if(id){
        	result = await (GenreRsrc.getGenre(id));
        } else {
        	result = await (GenreRsrc.getGenres());
        }   
    } catch(error) {
        throw error;
    }
    return { genre: result };
}

function updateGenre(genre) {
    var result;
    try {
        result = await (GenreRsrc.updateGenre(genre));
    } catch(error) {
        throw error;
    }
    return { genre: result };
}

function deleteGenre(id) {
    var result;
    try {
        result = await (GenreRsrc.deleteGenre(id));
    } catch(error) {
        throw error;
    }
    return { genre: result };
}

function postGenre(genre) {
    var result;
    try {
        result = await (GenreRsrc.addGenre(genre));
    } catch(error) {
        throw error;
    }
    return { genre: result };
}

module.exports.getGenre = async(getGenre);
module.exports.updateGenre = async(updateGenre);
module.exports.deleteGenre = async(deleteGenre);
module.exports.postGenre = async(postGenre);