const pedido = require('./../models/pedido');

const newPedido = async function (req, res) {
    try{
        console.log(req.body);
        const pedidoAux = req.body;
        console.log(pedidoAux);
        await pedido.create(pedidoAux);
        res.status(200).json('Pedido realizado con éxito');
        
    }catch(e){
        console.log(e);
    }
}

module.exports = {
    newPedido,
}