const { Prisma } = require('@prisma/client')
const prisma = require('../../db')

// Find all data
const findCustomer = async () => {
    const findData = await prisma.customer.findMany({
        orderBy: {
            Customer_ID: 'asc',
        }
    })

    return findData
}

// Find customer data by id
const findCustomerById = async (Customer_ID) => {
    const Data = await prisma.customer.findUnique({
        where: {
            Customer_ID,
        },
    })

    return Data
}

// adding customer data
const addCustomer = async (CustomerData) => {
    const newAdmin = await prisma.customer.create({
        data: {
            Customer_name: CustomerData.Customer_name,
            Customer_address: CustomerData.Customer_address,
            Customer_contact: CustomerData.Customer_contact,
        }
    })

    return newAdmin
}

const updateCustomer = async(Customer_ID, customerData) => {
    const updatedUser = await prisma.customer.update({
        where: {
            Customer_ID: parseInt(Customer_ID),
        },
        data:{
            Customer_name: customerData.Customer_name,
            Customer_address: customerData.Customer_address,
            Customer_contact: customerData.Customer_contact,
        }
    })
    return updatedUser
}

const removeCustomer = async(Customer_ID) => {
    await prisma.customer.delete({
        where: {
            Customer_ID,
        }
    })
}

module.exports = {
    findCustomer,
    findCustomerById,
    addCustomer,
    updateCustomer,
    removeCustomer,
}