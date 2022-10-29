import { Router } from "express"
import multer from 'multer'
import * as c from './src/controller/control.js'


const routes = Router()

const upload = multer({ dest: 'uploads/' })


routes.get('/', c.controlIndex)
routes.get('/objetivos', c.getObjetivos)
routes.get('/objetivos/:id', c.getObjetivosId)
routes.get('/objetivos/usr/:usr', c.getObjetivosUsr)




// routes.get('/', c.controlIndex)

// routes.post('/pessoa', upload.none(), c.controlInsert)

// routes.get('/pessoa/:id', upload.none(), c.controlGetById)

// routes.put('/pessoa/:id', c.controlUpdateById)

// routes.delete('/pessoa/:id', c.controlDeleteById)

// routes.get('/pessoas', c.controlInicio)





export default routes