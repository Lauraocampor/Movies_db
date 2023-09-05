
module.exports = (sequelize, DataTypes) => {
    const Movie = sequelize.define('Movie', {
        id: {
            type: DataTypes.INTEGER(10).UNSIGNED,
            autoincrement : true,
            primaryKey: true
        },
        title: {
            type: DataTypes.STRING(500),
            allowNull : false
        },
        rating: {
            type: DataTypes.DECIMAL(3,1),
            allowNull : false
        },
        awards: {
            type: DataTypes.INTEGER(10).UNSIGNED,
            allowNull : false
        },
        release_date: {
            type: DataTypes.DATE,
            allowNull : false
        },
        length: {
            type: DataTypes.INTEGER(10).UNSIGNED,
            allowNull : true
        },
        genre_id: {
            type: DataTypes.INTEGER(10).UNSIGNED,
            allowNull : true
        }
    },
    { 
        tableName : 'movies',
        timestamps: false
    });
    return Movie;
};

