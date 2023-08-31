const db = require('../database/models/index');

let controller = {
    list: (req, res) => {
        db.Genre.findAll()
            .then((genres) => {
            res.render('genresList', {genres})
        })
    },
    detail : (req, res) => {
        db.Genre.findByPk(req.params.id)
        .then((genre) => {
            res.render('genresDetail', {genre})
    });
    }
}

module.exports = controller;