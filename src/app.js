import express from 'express'
import handlebars from 'express-handlebars'
import __dirname from './utils.js'

const app = express()

//Inicializamos motor de plantilla
app.engine('handlebars', handlebars.engine())
//Indicamos donde estan las vistas
app.set('views', __dirname + '/views')
//Indicamos que motor de plantillas usar
app.set('view engine', 'handlebars')

const products = [
    {
        name: 'Coca Cola',
        price: 100
    },
    {
        name: 'Fanta',
        price: 100
    },
    {
        name: 'Pepsi',
        price: 90
    }
]

app.get('/', (req, res) =>{
    
        res.render('index', {products})

})


const server = app.listen(8080)
