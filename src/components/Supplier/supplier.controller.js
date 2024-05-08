const express = require('express')

const {
    getAllData,
    getDataById,
    postSupplier,
    patchData,
    deleteData,
} = require('./supplier.service')

const router = express.Router()

router.get('/', async (req, res) => {
    const result = await getAllData()
    res.send(result)
})

router.get('/:id', async (req, res) => {
    try {
        const id = parseInt(req.params.id)
        const result = await getDataById(parseInt(id))

        res.send(result)
    } catch (error) {
        res.status(400).send(error.message)
    }
})

router.post('/', async (req, res) => {
    try {
        const newSupplier = req.body
        const result = await postSupplier(newSupplier)

        res.send({
            data: result,
            message: "New supplier has been added"
        })
    } catch (error) {
        res.status(500).send(error.message)
    }
})

router.patch('/:id', async (req, res) => {
    const id = req.params.id
    const updateData = req.body

    if (
        !(
            updateData.Supplier_name ||
            updateData.Supplier_origin ||
            updateData.Supplier_contact
        )
    ) {
        return res.status(400).send('Some fields are missing')
    }
    const result = await patchData(parseInt(id), updateData)

    res.send({
        data: result,
        message: `Supplier with id ${id} has been updated`
    })
})

router.delete('/:id', async (req, res) => {
    try {
        const id = parseInt(req.params.id)

        await deleteData(parseInt(id))

        res.status(200).send({
            message: `Supplier with id ${id} has been deleted`
        })
    } catch (error) {
        
    }
})

module.exports = router