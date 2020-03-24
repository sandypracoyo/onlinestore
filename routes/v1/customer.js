var express = require('express');
var router = express.Router();
const controller = require('../../controllers/customer');

/* GET customer */
router.route('/customer')
    .get(controller.getAllCustomer)
    .post(controller.addCustomer)

router.route('/customer/:id')
    .get(controller.getCustomerById)
    .put(controller.updateCustomer)
    .delete(controller.deleteCustomer)

module.exports = router;
