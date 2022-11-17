import mysql from 'mysql2/promise';
import * as dotenv from 'dotenv'
dotenv.config()

// create the connection to database
const connection = await mysql.createPool({
    host: process.env.HOST,
    user: process.env.USER,
    database: process.env.DATABASE,
    password: process.env.PASSWORD
});



export async function connect(sqlquery, place) {
    let [rows, fields] = await connection.execute(sqlquery, place)
    return rows
}



import { Sequelize } from 'sequelize';


const sequelize = new Sequelize(process.env.DATABASE, process.env.USER, process.env.PASSWORD, {
    host: process.env.HOST,
    dialect: 'mysql'
});