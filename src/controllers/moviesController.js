const db = require('../database/models/index');

let controller = {
    list: (req, res) => {
        db.Movie.findAll()
            .then((movies) => {
            res.render('moviesList', {movies})
        })
    },
    new : (req, res) => {
        db.Movie.findAll({
            order: [['release_date', 'DESC']],
            limit: 10
        }).then(movies => {
            res.render('newestMovies', {movies})
        })
    },
    recomended: (req, res) => {
        db.Movie.findAll({
            order: [['rating', 'DESC']],
            limit: 10
        }).then(movies => {
            res.render('recommendedMovies', {movies})
        })
    },
    detail : (req, res) => {
        db.Movie.findByPk(req.params.id)
        .then((movie) => {
            res.render('moviesDetail', {movie})
    });
    }
}

module.exports = controller;