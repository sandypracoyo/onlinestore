var express = require('express');
var router = express.Router();
const controller = require('../../controllers/product');

/* GET customer */
router.route('/product')
    .get(controller.getAllProduct)
    .post(controller.addProduct)

router.route('/product/:id')
    .get(controller.getProductById)
    .put(controller.updateProduct)
    .delete(controller.deleteProduct)


module.exports = router;
