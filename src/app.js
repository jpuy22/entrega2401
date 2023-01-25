import express from 'express'
import handlebars from 'express-handlebars'
import __dirname from './utils.js'
import viewsrouter from './routes/views.router.js'


const app = express()

//Inicializamos motor de plantilla
app.engine('handlebars', handlebars.engine())
//Indicamos donde estan las vistas
app.set('views', __dirname + '/views')
//Indicamos que motor de plantillas usar
app.set('view engine', 'handlebars')


app.use('/', viewsrouter)

const server = app.listen(8080)
