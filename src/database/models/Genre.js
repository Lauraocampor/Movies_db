const { DataTypes } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
    const Genre = sequelize.define('Genre', { 
            id: {
                type: DataTypes.INTEGER(10).UNSIGNED,
                autoincrement : true,
                primaryKey: true
            },
            created_at: {
                type: DataTypes.DATE,
                allowedNull : true
            },
            updated_at: {
                type: DataTypes.DATE,
                allowedNull : true
            },
            name: {
                type: DataTypes.STRING(100)
            },
            ranking: {
                type: DataTypes.INTEGER(10).UNSIGNED
            },
            active: {
                type: DataTypes.BOOLEAN
            }
        },
        { tableName : 'genres',
        timestamps: false});
    return Genre;
};