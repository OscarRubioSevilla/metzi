const app = require('../index');
const jwt = require('jsonwebtoken');

exports.crearToken = ({ id }) => jwt.sign({ id }, app.app.get('llave'), { expiresIn: '24h' });
exports.usuarioValidado = ((req, res, next) => {
    const token = req.headers['access-token'];
    if (token) {
        jwt.verify(token, app.app.get('llave'), (err, decoded) => {
            if (err) {
                res.status(401).json({ mensaje: 'Token inválida' });
            } else {
                req.usuario_id = decoded.id;
                next();
            }
        });
    } else {
        res.status(404).json({
            mensaje: 'Token no proveída.'
        });
    }
});