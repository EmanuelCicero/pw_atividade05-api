const stockModel = require('../model/stockModel');


const createStock = async (stockData) => {
    const product = new stockModel(stockData);
    await product.save();
    return product;
}

const getAllProducts = async () => {
    return await stockModel.find({}, '-_id -__v')
}

const getProdutById = async (id) => {
    return await stockModel.findOne({ id }, '-_id -__v')
}

const deleteProductById = async ( id ) => {
    return await stockModel.deleteOne({ id });
};

const updateProductById = async ( id , producDdata) => {
    return await stockModel.updateOne ({ id }, producDdata);
}


module.exports = {
    createStock,
    getAllProducts, 
    getProdutById,
    deleteProductById,
    updateProductById
}
