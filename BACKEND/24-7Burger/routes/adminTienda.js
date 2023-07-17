var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var db = mongoose.connection;
const { newTienda } = require('./../controllers/adminTiendaController');

router.post('/newTienda', newTienda);

module.exports = router;