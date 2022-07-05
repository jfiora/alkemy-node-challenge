import { DataTypes } from 'sequelize';
import { sequelize } from "../database/database.js";

export const Genre = sequelize.define('genres', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    image: {
        type: DataTypes.STRING,
    },
}, {
    timestamps: false,
});