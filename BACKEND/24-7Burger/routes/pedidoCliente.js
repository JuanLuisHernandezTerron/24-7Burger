var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var db = mongoose.connection;
const { newPedido } = require('./../controllers/pedidoClienteController');


router.post('/newPedido', newPedido);


module.exports = router;