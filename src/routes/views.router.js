import express from 'express'

const router = express.Router()


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

router.get('/', (req, res) =>{
    
        res.render('index', {products})

})


export default router