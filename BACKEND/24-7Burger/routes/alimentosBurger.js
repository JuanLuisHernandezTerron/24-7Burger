var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var db = mongoose.connection;
const { newAlimento,deleteAlimento } = require('./../controllers/alimentosController');
const validatorToken = require ('./../middleware/tokenValidator'); 
const mediaMiddleware = require('./../middleware/media');

router.post('/newAlimento',mediaMiddleware.upload,newAlimento);
router.delete('/deleteAlimento',deleteAlimento);

module.exports = router;