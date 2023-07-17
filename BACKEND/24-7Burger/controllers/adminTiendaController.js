const adminTienda = require('./../models/tiendaAdmin')

const newTienda = async function (req, res) {
    try{
        const tienda = req.body;
        await adminTienda.create(tienda);
        res.status(200).json('Tienda Ingresada Correctamente');
    }catch(e){
        console.log(e);
    }
}

module.exports = {
    newTienda
}