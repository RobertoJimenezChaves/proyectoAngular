var async = require('asyncawait/async');
var await = require('asyncawait/await');
var movieModel = require(__base + 'server/model/movie');

function getMovies() {
    var movies = await(movieModel.find({}));
    return movies;
}

function getMovie(id) {
    var movie = await(movieModel.findOne({_id:id}));
    return movie;
}

function deleteMovie(id) {
    var movie = await(movieModel.remove({_id:id}));
    return movie;
}

function updateMovie(movieParam) {
    var movie = await(movieModel.update({_id:movieParam._id},movieParam));
    return movie;
}

function addMovie(movieParam) {
    var movie = await(movieModel.create(movieParam));
    return movie;
}

module.exports = {
    getMovies: async(getMovies),
    getMovie: async(getMovie),
    deleteMovie: async(deleteMovie),
    updateMovie: async(updateMovie),
    addMovie: async(addMovie)
};