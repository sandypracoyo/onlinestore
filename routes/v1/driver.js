var express = require('express');
var router = express.Router();
const controller = require('../../controllers/driver');

/* GET customer */
router.route('/driver')
    .get(controller.getAllDriver)
    .post(controller.addDriver)

router.route('/driver/:id')
    .get(controller.getDriverById)
    .put(controller.updateDriver)
    .delete(controller.deleteDriver)


module.exports = router;
