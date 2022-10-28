import * as dotenv from 'dotenv'
dotenv.config()
import { connect } from "./connection.js";

async function getAllObjetivos(table) {
    let objetivos = await connect(`SELECT * FROM  ${table}`)
    return objetivos
}


async function getAllObjetivosById(table, param) {
    let objetivos = await connect(`SELECT * FROM  ${table} WHERE id_objetivo= ?`, param)
    return objetivos
}


export { getAllObjetivos, getAllObjetivosById }