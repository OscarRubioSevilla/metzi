const Articulo = require("../services-api/articulos/model/ArticuloModel");
const Articulos_entrada = require("../services-api/articulos_entradas/model/Articulo_Entrada_Model");
const Articulos_promociones = require("../services-api/articulos_promociones/model/Articulo_PromocionModel");
const Articulos_venta = require("../services-api/articulos_venta/model/Articulo_VentaModel");
const Categorias = require("../services-api/categorias/model/CategoriaModel");
const Configuracion = require("../services-api/configuracion/model/ConfiguracionModel");
const Marca = require("../services-api/marcas/model/MarcaModel");
const Promocion = require("../services-api/promociones/model/PromocionModel");
const Proveedores = require("../services-api/proveedores/model/ProveedorModel");
const Usuario = require("../services-api/usuarios/model/UsuarioModel");
const Venta = require("../services-api/ventas/model/VentaModel");

Marca.hasMany(Articulo, { foreignKey: "marca_id" });
Articulo.belongsTo(Marca, { foreignKey: "marca_id" });

Categorias.hasMany(Articulo, { foreignKey: "categoria_id" });
Articulo.belongsTo(Categorias, { foreignKey: "categoria_id" });

Usuario.hasMany(Venta, { foreignKey: "usuario_id" });
Venta.belongsTo(Usuario, { foreignKey: "usuario_id" });

Articulo.hasOne(Configuracion, { foreignKey: 'articulo_id' });
Configuracion.belongsTo(Articulo, { foreignKey: "articulo_id" });

Articulo.belongsToMany(Venta, { through: Articulos_venta, foreignKey: 'articulo_id' });
Venta.belongsToMany(Articulo, { through: Articulos_venta, foreignKey: 'venta_id' });

Articulo.belongsToMany(Promocion, { through: Articulos_promociones, foreignKey: 'articulo_id' });
Promocion.belongsToMany(Articulo, { through: Articulos_promociones, foreignKey: 'promocion_id' });

Proveedores.belongsToMany(Articulo, { through: Articulos_entrada, foreignKey: 'proveedor_id' });
Articulo.belongsToMany(Proveedores, { through: Articulos_entrada, foreignKey: 'articulo_id' });