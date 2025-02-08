'use strict';

module.exports = {
  async up(queryInterface) {
    // Insertar usuarios
    await queryInterface.bulkInsert('Usuarios', [
      {
        rol: 'Administrador',
        nombre: 'Oscar',
        apellido_p: 'Rubio',
        apellido_m: 'Sevilla',
        correo: 'admin@metzi.mx',
        contrasena: '12345',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        rol: 'Vendedor',
        nombre: 'Oscar',
        apellido_p: 'Rubio',
        apellido_m: 'Sevilla',
        correo: 'vendedor@metzi.mx',
        contrasena: '12345',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);

    // Insertar marcas
    await queryInterface.bulkInsert('Marcas', [
      { nombre: 'Marca 1', createdAt: new Date(), updatedAt: new Date() },
      { nombre: 'Marca 2', createdAt: new Date(), updatedAt: new Date() }
    ]);

    // Insertar categorías
    await queryInterface.bulkInsert('Categorias', [
      { nombre: 'Categoría 1', createdAt: new Date(), updatedAt: new Date() },
      { nombre: 'Categoría 2', createdAt: new Date(), updatedAt: new Date() }
    ]);

    // Insertar proveedores
    await queryInterface.bulkInsert('Proveedores', [
      { nombre: 'Ropa del angel', correo: 'ropa@gmail.com', createdAt: new Date(), updatedAt: new Date() },
      { nombre: 'El bazar del pollo', correo: 'pollito@gmail.com', createdAt: new Date(), updatedAt: new Date() }
    ]);

    // Insertar artículos
    await queryInterface.bulkInsert('Articulos', [
      { nombre: 'Bufanda', marca_id: 1, categoria_id: 2, precio: 50, codigo: 6472683, descripcion: 'Una descripción del producto', createdAt: new Date(), updatedAt: new Date() },
      { nombre: 'Calcetines', marca_id: 1, categoria_id: 2, precio: 25, codigo: 423948, descripcion: 'Una descripción del producto', createdAt: new Date(), updatedAt: new Date() },
      { nombre: 'Playera', marca_id: 1, categoria_id: 2, precio: 100, codigo: 898475, descripcion: 'Una descripción del producto', createdAt: new Date(), updatedAt: new Date() },
      { nombre: 'Blusa', marca_id: 1, categoria_id: 2, precio: 100, codigo: 97435345, descripcion: 'Una descripción del producto', createdAt: new Date(), updatedAt: new Date() },
      { nombre: 'Pantalon', marca_id: 2, categoria_id: 1, precio: 100, codigo: 4234235, descripcion: 'Una descripción del producto', createdAt: new Date(), updatedAt: new Date() }
    ]);

    // Insertar entradas de artículos
    await queryInterface.bulkInsert('ArticulosEntradas', [
      { articulo_id: 1, proveedor_id: 2, cantidad: 20, createdAt: new Date(), updatedAt: new Date() },
      { articulo_id: 2, proveedor_id: 2, cantidad: 20, createdAt: new Date(), updatedAt: new Date() },
      { articulo_id: 3, proveedor_id: 2, cantidad: 20, createdAt: new Date(), updatedAt: new Date() },
      { articulo_id: 4, proveedor_id: 1, cantidad: 20, createdAt: new Date(), updatedAt: new Date() },
      { articulo_id: 5, proveedor_id: 1, cantidad: 20, createdAt: new Date(), updatedAt: new Date() }
    ]);

    // Insertar una venta
    await queryInterface.bulkInsert('Ventas', [
      { usuario_id: 1, total_venta: 500, estado_venta: 'Entregado', createdAt: new Date(), updatedAt: new Date() }
    ]);

    // Obtener el ID de la venta recién insertada
    const venta = await queryInterface.sequelize.query(
      `SELECT id FROM "Ventas" ORDER BY id DESC LIMIT 1;`,
      { type: queryInterface.sequelize.QueryTypes.SELECT }
    );

    // Insertar artículos vendidos en la venta
    await queryInterface.bulkInsert('ArticulosVentas', [
      { articulo_id: 1, venta_id: venta[0].id, cantidad: 2, precio: 200, subtotal: 400, createdAt: new Date(), updatedAt: new Date() },
      { articulo_id: 2, venta_id: venta[0].id, cantidad: 5, precio: 20, subtotal: 100, createdAt: new Date(), updatedAt: new Date() }
    ]);
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('Usuarios', null, {});
    await queryInterface.bulkDelete('Marcas', null, {});
    await queryInterface.bulkDelete('Categorias', null, {});
    await queryInterface.bulkDelete('Proveedores', null, {});
    await queryInterface.bulkDelete('Articulos', null, {});
    await queryInterface.bulkDelete('ArticulosEntradas', null, {});
    await queryInterface.bulkDelete('Ventas', null, {});
    await queryInterface.bulkDelete('ArticulosVentas', null, {});
  }
};
