const { Router } = require('express');
const router = Router();
const ProveedorController = require('../../proveedores/controller/ProveedorController');

router.get('/', ProveedorController.index);
router.get('/:id', ProveedorController.get);
router.post('/', ProveedorController.create);
router.put('/:id', ProveedorController.update);
router.delete('/:id', ProveedorController.delete);

module.exports = router;