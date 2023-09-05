const db = require('../database/models/index');

let controller = {
    list: async (req, res) => {
        db.Genre.findAll({ raw: true})
            .then((genres) => {
            res.render('genresList', {genres})
        })
            .catch(error => (console.log(error)))
    },
    detail : async (req, res) => {
        db.Genre.findByPk(req.params.id, { raw: true})
        .then((genre) => {
            res.render('genresDetail', {genre})
    })
        .catch(error => (console.log(error)))
    }
}

module.exports = controller;