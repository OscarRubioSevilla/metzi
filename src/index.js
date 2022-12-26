const express = require('express');
const config = require('./configToken/config');
const app = express();
const sequelize = require("../src/db/conexion");
const { rellenarDB } = require("../src/db/rellenar_db");
const { usuarioValidado } = require('./utils/jwt')
require("../src/db/asociaciones");

// Controladores
const articulosRutas = require('./services-api/articulos/routes/ArticulosRoutes');
const usuariosRutas = require('./services-api/usuarios/Routes/usuariosRoutes')
const marcasRutas = require('./services-api/marcas/routes/MarcasRoutes')
const categoriasRutas = require('./services-api/categorias/routes/CategoriasRoutes')
const configuracionRutas = require('./services-api/configuracion/routes/ConfiguracionRoutes')
const PromcionesRutas = require('./services-api/promociones/routes/PromocionesRoutes')
const ProveedorRutas = require('./services-api/proveedores/routes/ProveedorRoutes')
const VentasRutas = require('./services-api/ventas/routes/VentasRoutes');
const InventarioRutas = require('./services-api/inventario/routes/inventario');
// Configuraciones
const port = process.env.PORT || 2000;

// middlewares
app.use(express.json());
app.set('llave', config.llave);


//RUTAS
app.use('/api/articulos', articulosRutas);
app.use('/api/usuarios', usuariosRutas);
app.use('/api/marcas', usuarioValidado, marcasRutas)
app.use('/api/categorias', usuarioValidado, categoriasRutas);
app.use('/api/configuraciones', configuracionRutas);
app.use('/api/promociones', PromcionesRutas);
app.use('/api/provedores', ProveedorRutas);
app.use('/api/ventas', usuarioValidado, VentasRutas);
app.use('/api/inventario', InventarioRutas);

app.get('/api', (req, res) => {
    res.send('api metzi version 1.0');
});
app.listen(port, async(req, res) => {
    try {
        // await sequelize.drop();
        await sequelize.authenticate();
        //  await rellenarDB(sequelize);
        console.log('Base de datos conectada')
    } catch (e) {
        console.log('No se pudo conectar a la base de datos', e)
    }
});
module.exports.app = app;
// AUTENTICAR ["TOKEN"]