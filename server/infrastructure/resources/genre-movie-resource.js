var async = require('asyncawait/async');
var await = require('asyncawait/await');
var genreModel = require(__base + 'server/model/genre');

function getGenres() {
    var genres = await(genreModel.find({}));
    return genres;
}

function getGenre(id) {
    var genre = await(genreModel.findOne({_id:id}));
    return genre;
}

function deleteGenre(id) {
    var genre = await(genreModel.remove({_id:id}));
    return genre;
}

function updateGenre(genreParam) {
    var genre = await(genreModel.update({_id:genreParam._id},genreParam));
    return genre;
}

function addGenre(genreParam) {
    var genre = await(genreModel.create(genreParam));
    return genre;
}

module.exports = {
    getGenres: async(getGenres),
    getGenre: async(getGenre),
    deleteGenre: async(deleteGenre),
    updateGenre: async(updateGenre),
    addGenre: async(addGenre)
};