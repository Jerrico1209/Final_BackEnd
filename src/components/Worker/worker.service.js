const {
    findData,
    findDataById,
    addData,
    updateData,
    removeData,
} = require('./worker.repository')

const getAllData = async () => {
    const Data = await findData()
    return Data
}

const getDataById = async (Workers_ID) => {
    const Data = await findDataById(Workers_ID)

    if (!Data){
        throw Error (`There is no workers data with id ${Workers_ID}`)
    }

    return Data
}

const postData = async (Data) => {
    const newWorkers = await addData(Data)
    return newWorkers
}

const patchData = async (Workers_ID, Data) => {
    await getDataById(Workers_ID)
    const patchData = await updateData(Workers_ID, Data)
    return patchData
}

const deleteData = async (Workers_ID) => {
    await getDataById(Workers_ID)
    await removeData(Workers_ID)
}

module.exports = {
    getAllData,
    getDataById,
    postData,
    patchData,
    deleteData,
}