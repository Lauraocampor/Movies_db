const db = require('../database/models/index');

let controller = {
    list: async (req, res) => {
        try {
            const genres = await db.Genre.findAll({ raw: true})
            res.render('genresList', {genres})
        } catch (error) {
            res.render(error)
        }
    },
    detail : async (req, res) => {
        try {
            const genre = await db.Genre.findByPk(req.params.id, { raw: true})
            res.render('genresDetail', {genre})          
        } catch (error) {
            res.render(error)
        }
    }
}

module.exports = controller;