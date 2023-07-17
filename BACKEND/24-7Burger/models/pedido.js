var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var pedidoSchema = new Schema({
    id_pedido: {type: Schema.ObjectId, required: true},
    datos_pedido: [{
        id_alimento: {type: Schema.ObjectId, required: true, ref:'alimento'},
        cantidad:{type: Number, required:true},
        extras:[{type: String}]
    }],
    recogida_envio: {type:String,required: true},
    estado_pedido: {type:String, default:'En espera'},
    id_tienda: {type: Schema.ObjectId, required: true, ref:'adminTienda'},
});

module.exports = mongoose.model('pedido', pedidoSchema);