import { DataTypes } from 'sequelize';
import { sequelize } from "../database/database.js";

export const Movie = sequelize.define('movies', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    image: {
        type: DataTypes.STRING,
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    createdDate: {
        type: DataTypes.STRING,
        allowNull: false
    },
    calification: {
        type: DataTypes.INTEGER,
        validate: {
            min: 1,
            max: 5,
        },
        allowNull: false
    },
}, {
    timestamps: false,
});