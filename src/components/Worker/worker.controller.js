const express = require('express')
const prisma = require('../../db')

const {
    getAllData,
    getDataById,
    postData,
    patchData,
    deleteData,
} = require('./worker.service')

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
        const newWorkersData = req.body
        const result = await postData(newWorkersData)

        res.send({
            data: result,
            message: 'new workers has been added'
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
            updateData.Workers_name ||
            updateData.Workers_address ||
            updateData.Workers_age ||
            updateData.Workers_contact
        )
    ){
        return res.status(400).send('Some fields are missing')
    }

    const result = await patchData(parseInt(id), updateData)

    res.send({
        data: result,
        message: `workers with ID ${id} has been updated`,
    })
})

router.delete('/:id', async (req, res) => {
    try {
        const id = parseInt(req.params.id)
        await deleteData(parseInt(id))
        res.status(200).send({
            message: `workers with ID ${id} has been deleted`
        })
    } catch (error) {
        
    }
})

module.exports = router