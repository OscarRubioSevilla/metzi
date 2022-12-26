const { Router } = require('express');
const router = Router();
const UsuariosController = require('../controller/UsuarioController');

router.get('/', UsuariosController.index);
router.post('/login', UsuariosController.login);
router.get('/:id', UsuariosController.get);
router.post('/', UsuariosController.create);
router.put('/:id', UsuariosController.update);
router.delete('/:id', UsuariosController.delete);

module.exports = router;