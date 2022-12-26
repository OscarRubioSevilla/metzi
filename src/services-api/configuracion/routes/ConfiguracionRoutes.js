const { Router } = require('express');
const router = Router();
const CFController = require('../controllers/ConfiguracionControllers')


router.get('/', CFController.index);
router.get('/:id', CFController.get);
router.post('/', CFController.create);
router.put('/:id', CFController.update);
router.delete('/:id', CFController.delete);




module.exports = router;