import * as dotenv from 'dotenv'
dotenv.config()

import { connect } from "./src/models/connection.js";


let prazo = await connect("SELECT * FROM objetivos_prim")

let differenca = prazo[1].prazo_final - prazo[1].data_inclusao

console.log(prazo)
console.log(differenca / 1000 / 60 / 60)