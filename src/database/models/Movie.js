
module.exports = (sequelize, DataTypes) => {
    const Movie = sequelize.define('Movie', { 
            id: {
                type: DataTypes.INTEGER(10).UNSIGNED,
                autoincrement : true,
                primaryKey: true
            },
            title: {
                type: DataTypes.STRING(500)
            },
            rating: {
                type: DataTypes.DECIMAL(3,1)
            },
            awards: {
                type: DataTypes.INTEGER(10).UNSIGNED
            },
            release_date: {
                type: DataTypes.DATE
            },
            length: {
                type: DataTypes.INTEGER(10).UNSIGNED,
                allowedNull : true
            },
            genre_id: {
                type: DataTypes.INTEGER(10).UNSIGNED,
                allowedNull : true
            }
        },
        { tableName : 'movies',
        timestamps: false});
    return Movie;
};