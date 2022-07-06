import { DataTypes } from 'sequelize';
import { sequelize } from "../config/database.js";

export const Character = sequelize.define('characters', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    image: {
        type: DataTypes.STRING,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    age: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    weight: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    history: {
        type: DataTypes.STRING,
        allowNull: false
    },
}, {
    timestamps: false,
});