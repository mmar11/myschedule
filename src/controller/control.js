import * as f from "../models/serviceobjetivos.js"

let controlIndex = (req, res) => {
    res.send('index.html')
}

let getObjetivos = async (req, res) => {
    const TABLE = 'objetivos'
    let objetivos = await f.getAllObjetivos(TABLE)
    let differenca = (objetivos[1].prazo_final - objetivos[1].data_inclusao) / 1000 / 60 / 60
    res.send(objetivos)
}

let getObjetivosId = async (req, res) => {
    const TABLE = 'objetivos'
    let id = [req.params.id]
    let col = 'id_objetivo'
    let objetivos = await f.getAllByParam(TABLE, col, id)
    // let differenca = (objetivos[0].prazo_final - objetivos[0].data_inclusao) / 1000 / 60 / 60
    res.send(objetivos)
}

let getObjetivosUsr = async (req, res) => {
    const TABLE = 'objetivos'
    let usr = [req.params.usr]
    let col = 'id_usuario'
    let objetivos = await f.getAllByParam(TABLE, col, usr)
    // let differenca = (objetivos[0].prazo_final - objetivos[0].data_inclusao) / 1000 / 60 / 60
    res.send(objetivos)
}

let getTarefasId = async (req, res) => {
    const TABLE = 'tarefas'
    let id = [req.params.id]
    let col = 'id_tarefa'
    let tarefas = await f.getAllByParam(TABLE, col, id)
    // let differenca = (objetivos[0].prazo_final - objetivos[0].data_inclusao) / 1000 / 60 / 60
    res.send(tarefas)
}

let getTarefasUsr = async (req, res) => {
    const TABLE = 'tarefas'
    let usr = [req.params.usr]
    let col = 'usr_id'
    let objetivos = await f.getAllByParam(TABLE, col, usr)
    // let differenca = (objetivos[0].prazo_final - objetivos[0].data_inclusao) / 1000 / 60 / 60
    res.send(objetivos)
}

let getTarefasGestao = async (req, res) => {
    const TABLE = 'tarefas'
    let usr = [req.params.usr]
    let col = 'gestao_id'
    let objetivos = await f.getAllByParam(TABLE, col, usr)
    // let differenca = (objetivos[0].prazo_final - objetivos[0].data_inclusao) / 1000 / 60 / 60
    res.send(objetivos)
}


export { controlIndex, getObjetivos, getObjetivosId, getObjetivosUsr, getTarefasId, getTarefasUsr, getTarefasGestao }