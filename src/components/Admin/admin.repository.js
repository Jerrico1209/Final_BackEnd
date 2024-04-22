const { Prisma } = require("@prisma/client")
const prisma = require("../../db")

const findData = async () => {
    const findData = await prisma.admin.findMany()
    return findData
}

const findDataById = async (Admin_ID) => {
    const data = await prisma.admin.findUnique({
        where: {
            Admin_ID,
        },
    })

    return data
}

const addAdmin = async (adminData) => {
    const newAdmin = await prisma.admin.create({
        data: {
            Admin_ID: adminData.Admin_ID,
            User: adminData.User,
            User_Contact: adminData.User_Contact,
        }
    })

    return newAdmin
}

module.exports = {
    findData,
    findDataById,
    addAdmin,

}