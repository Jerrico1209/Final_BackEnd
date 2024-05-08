const prisma = require('../../db')

const {
    findProduct,
    findProductById,
    addProduct,
    updateProduct,
    deleteProduct
} = require('./product.repository')

const getProductData = async () => {
    const product = await findProduct()

    if (!product){
        throw Error ('No Product Found!')
    }

    return product
}

const getProductById = async (Product_ID) => {
    const product = await findProductById(Product_ID)

    if (!product){
        throw Error (`There is no product with ID ${Product_ID}`)
    }

    return product
}

const createNewProductData = async (product) => {
    const newProduct = await addProduct(product)
    
    return newProduct
}

const updatingProduct = async (Product_ID, product) => {
    await findProductById(Product_ID)

    const updatedProduct = await updateProduct(Product_ID, product)
    
    return updatedProduct
}

const deletingProduct = async (Product_ID) => {
    await getProductById(Product_ID)

    await deleteProduct(Product_ID)
}

module.exports = {
    getProductData,
    getProductById,
    createNewProductData,
    updatingProduct,
    deletingProduct
}