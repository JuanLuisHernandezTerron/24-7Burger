var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var db = mongoose.connection;
const { newPedido,getPedidos } = require('./../controllers/pedidoClienteController');


router.post('/newPedido', newPedido);
router.get('/getPedidos', getPedidos);


module.exports = router;