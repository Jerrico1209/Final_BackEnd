const { Prisma } = require("@prisma/client")
const prisma = require("../../db")

// Find all admin data
const findData = async () => {
    const findData = await prisma.admin.findMany({
        orderBy: {
            Admin_ID: 'asc',
        },
    })
    
    return findData
}

// Find admin data by id
const findDataById = async (Admin_ID) => {
    const data = await prisma.admin.findUnique({
        where: {
            Admin_ID,
        },
    })

    return data
}

// Add new admin data
const addAdmin = async (adminData) => {
    const newAdmin = await prisma.admin.create({
        data: {
            User: adminData.User,
            User_Contact: adminData.User_Contact,
        }
    })

    return newAdmin
}

// Update admin data by id
const updateAdmin = async (Admin_ID, adminData) => {
    const updateAdmin = await prisma.admin.update({
        where: {
            Admin_ID: parseInt(Admin_ID),
        },
        data:{
            User: adminData.User,
            User_Contact: adminData.User_Contact,
        }
    })
    return updateAdmin

}

// Delete admin data by id
const deleteAdmin = async(Admin_ID) => {
    await prisma.admin.delete({
        where:{
            Admin_ID,
        }
    })
}

module.exports = {
    findData,
    findDataById,
    addAdmin,
    updateAdmin,
    deleteAdmin,
}