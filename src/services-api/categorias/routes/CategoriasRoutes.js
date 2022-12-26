const { Router } = require('express');
const router = Router();
const CategoriaController = require('../controllers/CategoriasController');

router.get('/', CategoriaController.index);
router.get('/:id', CategoriaController.get);
router.post('/', CategoriaController.create);
router.put('/:id', CategoriaController.update);
router.delete('/:id', CategoriaController.delete);
module.exports = router;