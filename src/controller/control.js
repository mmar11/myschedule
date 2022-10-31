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

let getUsrGestao = async (req, res) => {
    const TABLE = 'conexoes'
    let usr = [req.params.usr]
    let col = 'usr_gestor'
    let resp = await f.getAllByParam(TABLE, col, usr)
    res.send(resp)

    // let differenca = (objetivos[0].prazo_final - objetivos[0].data_inclusao) / 1000 / 60 / 60

}

let insertObjetivo = async (req, res) => {
    const TABLE = 'objetivos'

    let { nome_objetivo, prazo_final, hora_prazo_final, coins_total, coins_ganhos, objetivo_sec_id_1, objetivo_sec_id_2, objetivo_sec_id_3, objetivo_bonus, id_usuario, id_gestor, feito } = req.body
    let param = [nome_objetivo, prazo_final, hora_prazo_final, f.getDate(), f.getHour(), coins_total, coins_ganhos, objetivo_sec_id_1, objetivo_sec_id_2, objetivo_sec_id_3, objetivo_bonus, id_usuario, id_gestor, feito]
    let col = 'nome_objetivo ,prazo_final , hora_prazo_final , data_inclusao , hora_inclusao , coins_total , coins_ganhos , objetivo_sec_id_1, objetivo_sec_id_2 , objetivo_sec_id_3, objetivo_bonus ,  id_usuario ,  id_gestor , feito'
    let resp = await f.insertData(TABLE, col, param)
    let newid = [resp.insertId]
    if (resp.affectedRows > 0) {
        let col = 'id_objetivo'
        let objetivos = await f.getAllByParam(TABLE, col, newid)
        res.send(objetivos)
    }


}

let insertTarefa = async (req, res) => {
    const TABLE = 'tarefas'

    let { nome_tarefa, prazo_tarefa, hora_prazo_tarefa, coins_total, coins_ganho, usr_id, gestao_id, obs, obj_id, feito } = req.body
    let param = [nome_tarefa, prazo_tarefa, hora_prazo_tarefa, coins_total, coins_ganho, usr_id, gestao_id, obs, obj_id, feito]
    let col = 'nome_tarefa, prazo_tarefa, hora_prazo_tarefa, coins_total, coins_ganho, usr_id, gestao_id, obs, obj_id, feito'
    let resp = await f.insertData(TABLE, col, param)
    let newid = [resp.insertId]
    if (resp.affectedRows > 0) {
        let col = 'id_tarefa'
        let objetivos = await f.getAllByParam(TABLE, col, newid)
        res.send(objetivos)
    }
}

let editTarefas = async (req, res) => {
    const TABLE = 'tarefas'
    let idtar = req.params.idtarefa
    let { coins_ganho, obs, feito } = req.body

    let param = [coins_ganho, obs, feito, idtar]

    let objetivos = await f.updateTarefaByID(TABLE, param)
    // let differenca = (objetivos[0].prazo_final - objetivos[0].data_inclusao) / 1000 / 60 / 60
    res.send(objetivos)
}


export {
    controlIndex, getObjetivos, getObjetivosId, getObjetivosUsr,
    getTarefasId, getTarefasUsr, getTarefasGestao, getUsrGestao,
    insertObjetivo, insertTarefa, editTarefas
}