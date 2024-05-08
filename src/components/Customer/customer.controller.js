const express = require('express')

const {
    getAllData,
    getCustomerById,
    postNewCustomer,
    patchCustomer,
    deleteCustomer
} = require('./customer.service')

const router = express.Router()

router.get('/', async (req, res) => {
    try {
        const result = await getAllData()
        
        res.status(200).send(result)
    } catch (error) {
        res.status(400).send(error.message)
    }
})

router.get('/:id', async (req, res) => {
    try {
        const CustomerId = parseInt(req.params.id)
        const Data = await getCustomerById(parseInt(CustomerId))

        res.status(200).send(Data)
    } catch (error) {
        res.status(400).send(error.message)
    }
})

router.post('/', async (req, res) => {
    try {
        const newCustomer = req.body
        const result = await postNewCustomer(newCustomer)

        res.status(201).send({
            data: result,
            message: 'Customer created successfully'
        })
    } catch (error) {
        return res.status(500).send(error.message)
    }
})

router.patch("/:id", async (req, res) => {
    const CustomerId = req.params.id
    const patchData = req.body

    if (
        !(
            patchData.Customer_name ||
            patchData.Customer_address ||
            patchData.Customer_contaact
        )
    ){
        return res.status(400).send('Fields are missing')
    }

    const result = await patchCustomer(parseInt(CustomerId), patchData)

    res.send({
        data: result,
        message: 'Customer has been updated'
    })
})

router.delete('/:id', async (req, res) => {
    try {
        const id = parseInt(req.params.id)

        await deleteCustomer(parseInt(id))

        res.status(200).send({
            message: `The customer with the id ${id} has been deleted`
        })
    } catch (error) {
        
    }
})

module.exports = router