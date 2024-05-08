const { Prisma } = require('@prisma/client')
const prisma = require('../../db')

// find all supplier data
const findData = async () => {
    const findData = await prisma.supplier.findMany({
        orderBy: {
            Supplier_ID: 'asc',
        }
    })
    return findData
}

// find supplier data by id
const findDataById = async (Supplier_ID) => {
    const Data = await prisma.supplier.findUnique({
        where:{
            Supplier_ID,
        },
    })
    return Data
}

// ADD NEW SUPPLIER DATA
const addSupplier = async (supplierData) => {
    const newSupplier = await prisma.supplier.create({
        data: {
            Supplier_name: supplierData.Supplier_name,
            Supplier_origin: supplierData.Supplier_origin,
            Supplier_contact: supplierData.Supplier_contact
        }
    })
    return newSupplier
}

// UPDATE SUPPLIER DATA
const updateData = async (Supplier_ID, supplierData) => {
    const updateData = await prisma.supplier.update({
        where: {
            Supplier_ID: parseInt(Supplier_ID),
        },
        data: {
            Supplier_name: supplierData.Supplier_name,
            Supplier_origin: supplierData.Supplier_origin,
            Supplier_contact: supplierData.Supplier_contact
        }
    })
    return updateData
}

// DELETE SUPPLIER DATA BY ID
const removeSupplier = async (Supplier_ID) => {
    await prisma.supplier.delete({
        where: {
            Supplier_ID,
        }
    })
}

module.exports = {
    findData,
    findDataById,
    addSupplier,
    updateData,
    removeSupplier,
}