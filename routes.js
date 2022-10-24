import { Router } from "express"
import multer from 'multer'

const routes = Router()

const upload = multer({ dest: 'uploads/' })


routes.get('/', (req, res) => {
    res.send('index.html')
})

// routes.get('/', c.controlIndex)

// routes.post('/pessoa', upload.none(), c.controlInsert)

// routes.get('/pessoa/:id', upload.none(), c.controlGetById)

// routes.put('/pessoa/:id', c.controlUpdateById)

// routes.delete('/pessoa/:id', c.controlDeleteById)

// routes.get('/pessoas', c.controlInicio)





export default routes