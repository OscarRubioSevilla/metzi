exports.rellenarDB = async(sequelize) => {
    await sequelize.models.Usuario.create({
        rol: 'Administrador',
        nombre: 'Oscar',
        apellido_p: 'Rubio',
        apellido_m: 'Sevilla',
        correo: 'admin@metzi.mx',
        contrasena: '12345'
    });
    await sequelize.models.Usuario.create({
        rol: 'Vendedor',
        nombre: 'Oscar',
        apellido_p: 'Rubio',
        apellido_m: 'Sevilla',
        correo: 'vendedor@mezi.mx',
        contrasena: '12345'
    });
    await sequelize.models.Marca.create({
        nombre: 'Marca 1'
    });
    await sequelize.models.Marca.create({
        nombre: 'Marca 2'
    });
    await sequelize.models.Categoria.create({
        nombre: 'Categoría 1'
    });
    await sequelize.models.Categoria.create({
        nombre: 'Categoría 2'
    });
    await sequelize.models.Categoria.create({
        nombre: 'Categoría 2'
    });
    await sequelize.models.Proveedor.create({
        nombre: 'Ropa del angel',
        correo: 'ropa@gmail.com'
    });
    await sequelize.models.Proveedor.create({
        nombre: 'El bazar del pollo',
        correo: 'pollito@gmail.com'
    });

    await sequelize.models.Articulo.bulkCreate([{
            nombre: 'Bufanda',
            marca_id: 1,
            categoria_id: 2,
            precio: 50,
            codigo: 6472683,
            descripcion: 'Una descripción del producto'
        },
        {
            nombre: 'Calcetines',
            marca_id: 1,
            categoria_id: 2,
            precio: 25,
            codigo: 423948,
            descripcion: 'Una descripción del producto'
        }, {
            nombre: 'Playera',
            marca_id: 1,
            categoria_id: 2,
            precio: 100,
            codigo: 898475,
            descripcion: 'Una descripción del producto'
        },
        {
            nombre: 'Blusa',
            marca_id: 1,
            categoria_id: 2,
            precio: 100,
            codigo: 97435345,
            descripcion: 'Una descripción del producto'
        },
        {
            nombre: 'Pantalon',
            marca_id: 2,
            categoria_id: 1,
            precio: 100,
            codigo: 4234235,
            descripcion: 'Una descripción del producto'
        }
    ]);


    await sequelize.models.ArticulosEntrada.bulkCreate([

        {
            articulo_id: 1,
            proveedor_id: 2,
            cantidad: 20
        },
        {
            articulo_id: 2,
            proveedor_id: 2,
            cantidad: 20
        },
        {
            articulo_id: 3,
            proveedor_id: 2,
            cantidad: 20
        },
        {
            articulo_id: 4,
            proveedor_id: 1,
            cantidad: 20
        },
        {
            articulo_id: 5,
            proveedor_id: 1,
            cantidad: 20
        }
    ]);

    const venta = await sequelize.models.Venta.create({
        usuario_id: 1,
        total_venta: 500,
        estado_venta: 'Entregado'
    });

    const productos = [{
            id: 1,
            cantidad: 2,
            precio: 200,
            subtotal: 400
        },
        {
            id: 2,
            cantidad: 5,
            precio: 20,
            subtotal: 100
        }
    ];

    productos.forEach(async({ id, cantidad, precio }, indice) => {
        const subtotal = precio * cantidad;
        await sequelize.models.Articulos_venta.create({
            articulo_id: id,
            venta_id: venta.id,
            cantidad,
            precio,
            subtotal
        });
    });

}