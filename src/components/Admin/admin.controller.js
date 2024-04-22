const express = require("express")
const prisma = require("../../db")

const {
    getAllData,
    getDataById,
    createNewAdmin,
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
        const admin = await createNewAdmin(newAdminData)

        res.send({
            data: admin,
            message: "Admin created successfully"
        })

    } catch (error) {
        
    }
})

module.exports = router