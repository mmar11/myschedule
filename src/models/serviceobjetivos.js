import * as dotenv from 'dotenv'
dotenv.config()
import { connect } from "./connection.js";

let valinsert = (param) => {
    let val = "? "
    for (let i = 0; i < (param.length - 1); i++) {
        val += ", ? "
    }
    return val
}

async function getAllObjetivos(table) {
    let objetivos = await connect(`SELECT * FROM  ${table}`)
    return objetivos
}


async function getAllByParam(table, col, param) {
    let consulta = await connect(`SELECT * FROM  ${table} WHERE ${col}= ?`, param)
    return consulta
}







export { getAllObjetivos, getAllByParam }