const express = require('express');
const router = express.Router();
const stockController = require('../Controller/StockController')

router.post('/foods', stockController.createNewProduct);
router.get('/foods', stockController.getAllProducts)
router.get('/foods/:id', stockController.getProductPerId)
router.delete('/foods/:id', stockController.deleteProductStock)
router.put('/foods/:id', stockController.updateProductStock)

module.exports = router;