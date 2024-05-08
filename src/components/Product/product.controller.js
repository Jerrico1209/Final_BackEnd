const express = require('express')
const prisma = require('../../db')

const {
    getProductData,
    getProductById,
    createNewProductData,
    updatingProduct,
    deletingProduct
} = require('./product.service')

const router = express.Router()

// find all product data
router.get('/', async(req, res) => {
    const Data = await getProductData()
    res.send(Data)
})

// find product data by id
router.get('/:id', async(req, res) => {
    try {
        const id = parseInt(req.params.id)
        const data = await getProductById(id)

        res.send(data)
    } catch (error) {
        res.status(400).send(error.message)
    }
})

// create/insert a new product data
router.post('/', async (req, res) => {
    try {
        const newProductData = req.body
        const result = await createNewProductData(newProductData)

        res.send({
            data: result,
            message: "Product has been added"
        })
    } catch (error) {
        res.status(500).send(error.message)
    }
})

// Updating partial data by id
router.patch('/:id', async(req, res) => {
    const productId = req.params.id
    const updateProduct = req.body

    if(
        !(
            updateProduct.Product_type ||
            updateProduct.Product_size ||
            updateProduct.Product_amount
        )
    ){
        return res.status(400).json({
            message: "Missing fields"})
    }

    const result = await updatingProduct(parseInt(productId),updateProduct)

    res.send({
        data: result,
        message: "Product has been updated"
    })

})

router.delete('/:id', async(req, res) => {
    try {
        const id = parseInt(req.params.id)

        await deletingProduct(parseInt(id))

        res.status(200).send({
            message: `Product with the id ${id} has been deleted`
        })
    } catch (error) {
        
    }
})

module.exports = router