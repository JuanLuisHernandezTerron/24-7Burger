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
const enProceso = async function (req, res) {
    try{
        console.log(req.body.id_pedido);
        await pedido.updateOne({id_pedido: req.body.id_pedido},{estado_pedido: "En proceso"});
        res.status(200).json('Estado cambiado con éxito');
        
    }catch(e){
        console.log(e);
    }
}
const pedidoFinalizado = async function (req, res) {
    try{
        console.log(req.body.id_pedido);
        await pedido.updateOne({id_pedido: req.body.id_pedido},{estado_pedido: "Finalizado"});
        res.status(200).json('Estado cambiado con éxito');
        
    }catch(e){
        console.log(e);
    }
}

module.exports = {
    newPedido,
    enProceso,
    pedidoFinalizado
}