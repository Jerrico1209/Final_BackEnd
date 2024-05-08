const prisma = require('../../db')

const {
    findCustomer,
    findCustomerById,
    addCustomer,
    updateCustomer,
    removeCustomer,
} = require('./customer.repository')


// Get all data
const getAllData = async () => {
    const Data = await findCustomer()
    
    if (!Data){
        throw Error('No customer data found!');
    }
    return Data;
}

const getCustomerById = async (Customer_ID) => {
    const Data = await findCustomerById(Customer_ID)

    if (!Data){
        throw Error(`There is no customer with the id ${id}`)
    }

    return Data
}

const postNewCustomer = async (customer) => {
    const newCustomer = await addCustomer(customer)

    return newCustomer
}

const patchCustomer = async (Customer_ID, customer) => {
    await getCustomerById(Customer_ID)

    const updatedCustomer = await updateCustomer(Customer_ID, customer)

    return updatedCustomer
}

const deleteCustomer = async (Customer_ID) => {
    await getCustomerById(Customer_ID)

    await removeCustomer(Customer_ID)
}

module.exports = {
    getAllData,
    getCustomerById,
    postNewCustomer,
    patchCustomer,
    deleteCustomer,
}