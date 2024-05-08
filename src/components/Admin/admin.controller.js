const express = require("express")
const prisma = require("../../db")

const {
    getAllData,
    getDataById,
    createNewAdmin,
    updatingAdmin,
    removeAdmin,
} = require("./admin.service")

const router = express.Router()

// find all data
router.get( "/", async (req, res) => {
    const result = await getAllData()
    res.send(result)
})

// find data by id
router.get("/:id", async(req, res) => {
    try {
        const adminId = parseInt(req.params.id)
        const Data = await getDataById(parseInt(adminId))

        res.send(Data)
    } catch (error) {
        res.status(400).send(error.message)
    }
})

// add a new admin
router.post("/", async (req, res) => {
    try {
        const newAdminData = req.body
        const result = await createNewAdmin(newAdminData)

        res.send({
            data: result,
            message: "Admin created successfully"
        })

    } catch (error) {
        res.status(500).send(error.message)
    }
})

// updating partial admin data by ID
router.patch("/:id", async (req, res) => {
    const adminId = req.params.id
    const updateData = req.body

    if (
        !(
            updateData.User || 
            updateData.User_Contact
        )
    ) {
        return res.status(400).send('Some field are missing')
    }

    const result = await updatingAdmin(parseInt(adminId), updateData)

    res.send({
        data: result,
        message: 'Admin has been updated'
    })
})

// deleting admin data by id
router.delete('/:id', async (req, res) => {
    try {
        const id = parseInt(req.params.id)

        await removeAdmin(parseInt(id))

        res.status(200).send({
            message: `Admin with the id ${id} has been deleted`
        })
    } catch (error) {
        
    }
})

module.exports = router