const express = require("express")
const prisma = require("../../db")

const {
    getAllData,
    getDataById
} = require("./admin.service")

const router = express.Router()

router.get( "/", async (req, res) => {
    const result = await getAllData()
    res.send(result)
})

router.get("/:id", async(req, res) => {
    try {
        const adminId = parseInt(req.params.id)
        const Data = await getDataById(parseInt(adminId))

        res.send(Data)
    } catch (error) {
        res.status(400).send(error.message)
    }
})

module.exports = router