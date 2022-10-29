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
    let objetivos = await f.getAllObjetivosById(TABLE, id)
    let differenca = (objetivos[0].prazo_final - objetivos[0].data_inclusao) / 1000 / 60 / 60
    res.send(objetivos)
}

let getObjetivosUsr = async (req, res) => {
    const TABLE = 'objetivos'
    let id = [req.params.usr]
    let objetivos = await f.getAllObjetivosByUsr(TABLE, id)
    // let differenca = (objetivos[0].prazo_final - objetivos[0].data_inclusao) / 1000 / 60 / 60
    res.send(objetivos)
}


export { controlIndex, getObjetivos, getObjetivosId, getObjetivosUsr }