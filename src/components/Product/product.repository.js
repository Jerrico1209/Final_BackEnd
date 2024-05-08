const { Prisma } = require('@prisma/client')
const prisma = require('../../db')

// get all product
const findProduct = async () => {
    const findData = await prisma.product.findMany()

    return findData
}

// get product by id
const findProductById = async (Product_ID) => {
    const product = await prisma.product.findUnique({
        where: {
            Product_ID,
        }
    })

    return product
}

// add a product
const addProduct = async (productData) => {
    const newProductData = await prisma.product.create({
        data: {
            Product_type: productData.Product_type,
            Product_size: productData.Product_size,
            Product_amount: productData.Product_amount,
        }
    })

    return newProductData
}

// update product data by id
const updateProduct = async (Product_ID, productData) => {
    const updatedProduct = await prisma.product.update({
        where: {
            Product_ID: parseInt(Product_ID)
        },
        data: {
            Product_type: productData.Product_type,
            Product_size: productData.Product_size,
            Product_amount: productData.Product_amount,
        }
    })
    return updatedProduct
}

// delete product by id
const deleteProduct = async (Product_ID) => {
    await prisma.product.delete({
        where: {
            Product_ID,
        }
    })
}


module.exports = {
    findProduct,
    findProductById,
    addProduct,
    updateProduct,
    deleteProduct,
}
