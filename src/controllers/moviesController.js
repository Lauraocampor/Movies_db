const db = require('../database/models/index');

let controller = {
    list: async (req, res) => {
        try {
            let movies = await db.Movie.findAll({ raw: true})
            res.render('moviesList', {movies})
            
        } catch (error) {
            res.render(error)
        }
    },
    new : async (req, res) => {
        try {
            let movies = await db.Movie.findAll({
                raw: true,
                order: [['release_date', 'DESC']],
                limit: 10
            })
            res.render('newestMovies', {movies})
        } catch (error) {
            res.render(error)
        }
    },
    recomended: async (req, res) => {
        try {
            let movies = await db.Movie.findAll({
                raw: true,
                order: [['rating', 'DESC']],
                limit: 10
            })
            res.render('recommendedMovies', {movies})
        } catch (error) {
            res.render(error)
        }
    },
    detail : async (req, res) => {
        try {
            const id = req.params.id
            const movie = await db.Movie.findByPk(id, { raw: true})
            res.render('moviesDetail', {movie})
        } catch (error) {
            res.render(error)
        }
    }
}

module.exports = controller;