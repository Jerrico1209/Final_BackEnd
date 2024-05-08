
const {
    findData,
    findDataById,
    addSupplier,
    updateData,
    removeSupplier,
} = require('./supplier.repository')

// get all supplier data
const getAllData = async () => {
    const Data = await findData()
    return Data
}

// GET SUPPLIER DATA BY ID
const getDataById = async (Supplier_ID) => {
    const Data = await findDataById(Supplier_ID)

    if (!Data) {
        throw Error (`There is no supplier data with id ${Supplier_ID}`)
    }
    return Data
}

// POST SUPPLIER DATA
const postSupplier = async (supplier) => {
    const newSupplier = await addSupplier(supplier)

    return newSupplier
}

// PATCH SUPPLIER DATA
const patchData = async(Supplier_ID , supplier)=>{
    await getDataById(Supplier_ID)

    const patchData = await updateData(Supplier_ID, supplier)

    return patchData
}

// DELETE SUPPLIER DATA BY ID
const deleteData = async (Supplier_ID) => {
    await getDataById(Supplier_ID)

    await removeSupplier(Supplier_ID)
} 

module.exports = {
    getAllData,
    getDataById,
    postSupplier,
    patchData,
    deleteData,
}