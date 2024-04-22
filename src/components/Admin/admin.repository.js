const prisma = require("../../db")

const findData = async () => {
    const findData = await prisma.admin.findMany()
    return findData
}

const findDataById = async (id) => {
    const data = await prisma.admin.findUnique({
        where: {
            id,
        },
    })
}
module.exports = {
    findData,
    findDataById,
}