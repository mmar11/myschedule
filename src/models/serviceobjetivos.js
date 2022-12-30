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

let tzdif = 4

function getDate() {
    let data = new Date
    let d = data.getDate()
    let m = data.getMonth()
    let y = data.getFullYear()
    return (`${y}-${m + 1}-${d}`)

}


function getHour() {
    let data = new Date
    let h = data.getUTCHours()
    let min = data.getUTCMinutes()
    let s = data.getUTCSeconds()
    return (`${h - tzdif}:${min}:${s}`)

}


async function getAllObjetivos(table) {
    let objetivos = await connect(`SELECT * FROM  ${table}`)
    return objetivos
}


async function getAllByParam(table, col, param) {
    let consulta = await connect(`SELECT * FROM  ${table} WHERE ${col}= ?`, param)
    return consulta
}


async function insertData(table, colinsert, param) {

    let insert = await connect(`INSERT INTO ${table} (${colinsert}) VALUES(${valinsert(param)})`, param);
    return insert
}

async function updateTarefaByID(table, param) {

    let update = await connect(`UPDATE ${table} SET  coins_ganho = ? ,  obs = ? ,  feito = ?   WHERE id_tarefa = ?`, param);
    return update
}

async function updateObjetioByID(table, param) {

    let update = await connect(`UPDATE ${table} SET  tarefa_id_1 = ? , tarefa_id_2 = ? , tarefa_id_3 = ?, tarefa_bonus = ?   WHERE id_objetivo = ?`, param);
    return update
}

async function atualizaObjsByTarefa(tarefas, ObjId) {
    let idObj = ObjId
    const TABLE = 'objetivos'
    let col = 'id_objetivo'
    // let consult = await getAllByParam(TABLE, col, objId)

    // let update = await connect(`UPDATE ${table} SET  coins_ganhos = ? ,  feito = ?   WHERE id_objetivo = ?`, param);
    return idObj

}



export {
    getDate, getHour, getAllObjetivos, getAllByParam, insertData,
    updateTarefaByID, updateObjetioByID, atualizaObjsByTarefa
}