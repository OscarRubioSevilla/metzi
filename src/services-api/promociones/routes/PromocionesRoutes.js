const { Router } = require('express');
const router = Router();
const PromocionController = require('../controllers/PromocionesController')


router.get('/', PromocionController.index);
router.get('/:id', PromocionController.get);
router.post('/', PromocionController.create);
router.put('/:id', PromocionController.update);
router.delete('/:id', PromocionController.delete);

module.exports = router;