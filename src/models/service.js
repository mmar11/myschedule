import * as dotenv from 'dotenv'
dotenv.config()
import { connect } from "./connection.js";

async function getAllObjetivos() {

    let objetivos = await connect(`SELECT * FROM  objetivos_prim`)

    return objetivos
}

export { getAllObjetivos }