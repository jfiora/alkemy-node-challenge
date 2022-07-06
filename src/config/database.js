import Sequelize from "sequelize";

export const sequelize = new Sequelize(process.env.DATABASE, process.env.USER_DB, process.env.PASSWORD_DB,{
    host: process.env.HOST_DB,
    dialect: 'postgres'
})