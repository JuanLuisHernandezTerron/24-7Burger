var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var adminTiendaSchema = new Schema({
    id_tienda:{type:Schema.ObjectId},
    correoElectronico: {type: String, required: true, unique: true},
    contrasena: {type:String,required: true},
});

module.exports = mongoose.model('adminTienda', adminTiendaSchema);