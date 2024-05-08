const { Prisma } = require('@prisma/client')
const prisma = require('../../db')

// FIND ALL WORKER DATA
const findData = async () => {
    const findData = await prisma.workers.findMany({
        orderBy: {
            Workers_ID: 'asc',
        }
    })
    return findData
}

// FIND WORKER DATA BY ID
const findDataById = async (Workers_ID) => {
    const Data = await prisma.workers.findUnique({
        where: {
            Workers_ID,
        }
    })
    return Data
}

// ADDING NEW WORKER DATA
const addData = async (Data) => {
    const newData = await prisma.workers.create({
        data: {
            Workers_name: Data.Workers_name,
            Workers_address: Data.Workers_address,
            Workers_age: Data.Workers_age,
            Workers_contact: Data.Workers_contact,
        }
    })
    return newData
}

// UPDATE WORKERS DATA
const updateData = async (Workers_ID, Data) => {
    const updatedData = await prisma.workers.update({
        where: {
            Workers_ID: parseInt(Workers_ID),
        },
        data: {
            Workers_name: Data.Workers_name,
            Workers_address: Data.Workers_address,
            Workers_age: Data.Workers_age,
            Workers_contact: Data.Workers_contact,
        }
    })
    return updatedData
}

// DELETE WORKERS DATA
const removeData = async (Workers_ID) => {
    await prisma.workers.delete({
        where:{
            Workers_ID,
        }
    })
}

module.exports = {
    findData,
    findDataById,
    addData,
    updateData,
    removeData
}