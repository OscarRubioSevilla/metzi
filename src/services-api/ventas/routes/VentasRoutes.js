const { Router } = require('express');
const router = Router();
const VentasController = require('../controller/VentasController')

router.get('/', VentasController.index)
router.get('/:id', VentasController.get)
router.post('/', VentasController.create)



module.exports = router;