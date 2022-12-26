const bcrypt = require('bcrypt');
const saltRounds = 10;

exports.encriptar = async(contrasena) => {
    const salt = await bcrypt.genSalt(saltRounds);
    return await bcrypt.hash(contrasena, salt);
}
exports.comparar = async(contrasena, contrasenaUsuario) => await bcrypt.compare(contrasena, contrasenaUsuario);