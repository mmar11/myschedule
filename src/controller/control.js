import * as f from "../models/serviceobjetivos.js"

let controlIndex = (req, res) => {
    res.send('index.html')
}

let controlObjetivos = async (req, res) => {
    const TABLE = 'objetivos_prim'

    let objetivos = await f.getAllObjetivos(TABLE)

    let differenca = (objetivos[1].prazo_final - objetivos[1].data_inclusao) / 1000 / 60 / 60

    res.send(objetivos)
}

let controlObjetivosId = async (req, res) => {
    const TABLE = 'objetivos_prim'
    let id = [req.params.id]
    console.log(id)

    let objetivos = await f.getAllObjetivosById(TABLE, id)

    let differenca = (objetivos[0].prazo_final - objetivos[0].data_inclusao) / 1000 / 60 / 60
    console.log(differenca)

    res.send(objetivos)
}



export { controlIndex, controlObjetivos, controlObjetivosId }