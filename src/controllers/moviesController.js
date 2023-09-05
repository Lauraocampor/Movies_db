const db = require('../database/models/index');

let controller = {
    list: async (req, res) => {
        db.Movie.findAll({ raw: true})
            .then((movies) => {
            res.render('moviesList', {movies})
        })
            .catch(error => (console.log(error)))
    },
    new : async (req, res) => {
        db.Movie.findAll({
            raw: true,
            order: [['release_date', 'DESC']],
            limit: 10
        })
            .then(movies => {
            res.render('newestMovies', {movies})
        })
            .catch(error => (console.log(error)))
    },
    recomended: async (req, res) => {
        db.Movie.findAll({
            raw: true,
            order: [['rating', 'DESC']],
            limit: 10
        })
            .then(movies => {
            res.render('recommendedMovies', {movies})
        })
            .catch(error => (console.log(error)))
    },
    detail : async (req, res) => {
        db.Movie.findByPk(req.params.id, { raw: true})
        .then((movie) => {
            res.render('moviesDetail', {movie})
    })
        .catch(error => (console.log(error)))
    }
}

module.exports = controller;