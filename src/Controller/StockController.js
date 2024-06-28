const stockService = require('../Service/StockService');

const createNewProduct = async (req, res) => {
    try {
        const product = await stockService.createStock(req.body);
        res.status(201).json(product);
    } catch (error) {
        res.status(400).json({ message: "This product already exists in the system", error: error.message });
    }
};

const getAllProducts = async (req, res) => {
    const allProducts = await stockService.getAllProducts();
    res.json(allProducts)
}

const getProductPerId = async (req, res) => {
    try{
        const productId = await stockService.getProdutById(req.params.id);
        if (!productId) {
            return res.status(404).json({message: "Product not found"})
        }
        res.json(productId)   
    }catch (error) {
        res.status(400).json({ message: error.message });
    }
}

const deleteProductStock = async (req, res) => {
    try{
        await stockService.deleteProductById(req.params.id);
        res.json("Product deleted with success!");
    }catch (error) {
        res.status(400).json({ message: error.message });
    }
}

const updateProductStock = async (req, res) => {
    try{
        const productId =  req.params.id;
        const updateProduct = req.body;
        await stockService.updateProductById(productId, updateProduct);
        res.json("Updated successfully!")
    }catch(error){
        res.status(400).json({ message: error.message })
    }
} 

module.exports = {
    createNewProduct, 
    getAllProducts,
    getProductPerId, 
    deleteProductStock,
    updateProductStock
}