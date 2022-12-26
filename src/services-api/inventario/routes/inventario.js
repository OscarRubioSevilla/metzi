const { Router } = require('express');
const router = Router();
const InventarioController = require('../controller/Inventario')

router.get('/:id', InventarioController.index);

module.exports = router;