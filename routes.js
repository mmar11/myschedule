import { Router } from "express"
import multer from 'multer'
import * as c from './src/controller/control.js'


const routes = Router()

const upload = multer({ dest: 'uploads/' })

// rotas backend
routes.get('/', c.controlIndex)
routes.get('/objetivos', c.getObjetivos)
routes.get('/objetivos/:id', c.getObjetivosId)
routes.get('/objetivos/usr/:usr', c.getObjetivosUsr)
routes.get('/tarefas/usr/:usr', c.getTarefasUsr)
routes.get('/tarefas/id/:id', c.getTarefasId)
routes.get('/tarefas/gestao/:usr', c.getTarefasGestao)
routes.get('/usrgestao/:usr', c.getUsrGestao)










export default routes