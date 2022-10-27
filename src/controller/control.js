import * as f from "../models/service.js"

let controlIndex = (req, res) => {
    res.send('index.html')
}

let controlObjetivos = async (req, res) => {
    const TABLE = 'objetivos_prim'

    let objetivos = await f.getAllObjetivos()

    let differenca = objetivos[1].prazo_final - objetivos[1].data_inclusao

    console.log(objetivos)
    console.log(differenca / 1000 / 60 / 60)
    res.send(objetivos)
}




export { controlIndex, controlObjetivos }