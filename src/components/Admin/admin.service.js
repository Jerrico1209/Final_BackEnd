const prisma = require("../../db")

const{
    findData,
    findDataById,
    addAdmin,
    updateAdmin,
    deleteAdmin
} = require("./admin.repository")

// get all admin data
const getAllData = async () => {
    const Data = await findData()
    return Data
}

// get admin data by id
const getDataById = async (Admin_ID) => {
    const Data = await findDataById(Admin_ID)

    if (!Data){
        throw Error (`There is no admin data with id ${Admin_ID}`);
    }
    return Data
}

//  create new admin data
const createNewAdmin = async (admin) => {
    const newAdmin = await addAdmin(admin)

    return newAdmin
}

// update admin data
const updatingAdmin = async (Admin_ID, admin) => {
    await getDataById(Admin_ID)

    const updatedAdmin = await updateAdmin(Admin_ID, admin)

    return updatedAdmin
}

// deleting admin data
const removeAdmin = async (Admin_ID) => {
    await getDataById(Admin_ID)
    
    await deleteAdmin(Admin_ID)
}

module.exports = {
    getAllData,
    getDataById,
    createNewAdmin,
    updatingAdmin,
    removeAdmin,
}