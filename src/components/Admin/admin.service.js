const prisma = require("../../db")

const{
    findData,
    findDataById
} = require("./admin.repository")

const getAllData = async () => {
    const Data = await findData()
    return Data
}

const getDataById = async (id) => {
    const Data = await findDataById(id)

    if (!product){
        throw Error ("Data not found")
    }
    return Data
}

module.exports = {
    getAllData,
    getDataById,
}