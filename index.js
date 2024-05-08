const hostname = '127.0.0.1'
const port = 3000

const express = require('express')
const app = express()
const errorhandler = require('errorhandler')
const bodyparser = require('body-parser')
const moment = require('moment')
const morgan = require('morgan')
const multer = require('multer')


const adminController = require ('./src/components/Admin/admin.controller')
const productController = require('./src/components/Product/product.controller')
const customerController = require('./src/components/Customer/customer.controller')
const supplierController = require('./src/components/Supplier/supplier.controller')
const workersController = require('./src/components/Worker/worker.controller')

app.use(express.json())
app.use(morgan('dev'))

app.get('/', (req, res) => {
    res.status(200).json({
        status: 'Success',
        message: 'Welcome to the API!',
        date: moment().format(),
    })
})

// Admin End-Points
app.use('/admin/product', productController)
app.use('/admin/customer', customerController)
app.use('/admin/supplier', supplierController)
app.use('/admin/workers', workersController)

// Customer End-Points
app.use('/customer/product', productController)
app.use('/customer/admin', adminController)

// Workers End-Points
app.use('/workers/admin', adminController)
app.use('/workers/product', productController)
app.use('/workers/customer', customerController)

// Supplier End-Points 
app.use('/supplier/admin', adminController)
app.use('/supplier/product', productController)

// independent End-Points
app.use('/admin', adminController)
app.use('/customer', customerController)
app.use('/workers', workersController)
app.use('/supplier', supplierController)
app.use('/product', productController)

app.use((req, res, next) =>
    res.status(404).json({
        status: 'Error',
        message: 'Resource not found',
    })
)

const errorHandling = (err, req, res, next) => {
    res.status(501).json({
        status: 'Error',
        message: 'Terjadi kesalahan pada server',
    })
    app.use(errorHandling)
}


app.listen(port, () => 
    console.log(`Server Running at: http://${hostname}:${port}`))