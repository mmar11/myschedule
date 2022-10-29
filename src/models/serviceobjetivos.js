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


async function getAllObjetivosById(table, param) {
    let objetivos = await connect(`SELECT * FROM  ${table} WHERE id_objetivo= ?`, param)
    return objetivos
}

async function getAllObjetivosByUsr(table, param) {
    let objetivos = await connect(`SELECT * FROM  ${table} WHERE id_usuario= ?`, param)
    return objetivos
}





export { getAllObjetivos, getAllObjetivosById, getAllObjetivosByUsr }