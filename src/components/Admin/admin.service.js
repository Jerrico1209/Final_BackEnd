const prisma = require("../../db")

const{
    findData,
    findDataById,
    addAdmin,
} = require("./admin.repository")

const getAllData = async () => {
    const Data = await findData()
    return Data
}

const getDataById = async (Admin_ID) => {
    const Data = await findDataById(Admin_ID)

    if (!Data){
        throw Error ("Data not found")
    }
    return Data
}

const createNewAdmin = async (admin) => {
    const newAdmin = await addAdmin(admin)

    return newAdmin
}

module.exports = {
    getAllData,
    getDataById,
    createNewAdmin,
}