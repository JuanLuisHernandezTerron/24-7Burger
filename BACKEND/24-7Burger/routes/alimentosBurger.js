var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var db = mongoose.connection;
const { newAlimento,deleteAlimento,getAllAlimentos } = require('./../controllers/alimentosController');
const validatorToken = require ('./../middleware/tokenValidator'); 
const mediaMiddleware = require('./../middleware/media');

router.post('/newAlimento',mediaMiddleware.upload,newAlimento);
router.get('/getAllAlimento',getAllAlimentos);
router.delete('/deleteAlimento/:id',deleteAlimento);

module.exports = router;