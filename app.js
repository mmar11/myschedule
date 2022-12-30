import express from 'express'
const app = express()
const PORT = process.env.PORT || 5000



import routes from './routes.js'

import multer from 'multer'
const upload = multer({ dest: 'uploads/' })

import * as dotenv from 'dotenv'
dotenv.config()

app.use(express.static('public'))
app.use(express.json());

app.set('views', './src/views')
app.set('view engine', 'ejs')

app.use(routes)







app.listen(PORT, () => {
    console.log(`Server runnig at http://localhost:${PORT}`)
})