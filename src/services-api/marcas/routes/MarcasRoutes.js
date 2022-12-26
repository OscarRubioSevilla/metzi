const { Router } = require('express');
const router = Router();
const MarcasController = require('../../marcas/controllers/MarcasController');

router.get('/', MarcasController.index);
router.get('/:id', MarcasController.get);
router.post('/', MarcasController.create);
router.put('/:id', MarcasController.update);
router.delete('/:id', MarcasController.delete);

module.exports = router;