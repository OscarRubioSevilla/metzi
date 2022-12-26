const { Router } = require('express');
const router = Router();
const ArticuloController = require('../controllers/ArticulosController');

router.get('/', ArticuloController.index);
router.get('/:id', ArticuloController.get);
router.get('/:id/inventario', ArticuloController.inventario);
router.post('/', ArticuloController.create);
router.put('/:id', ArticuloController.update);
router.delete('/:id', ArticuloController.delete);


module.exports = router;