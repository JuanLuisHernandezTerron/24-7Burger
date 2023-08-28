var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var pedidoSchema = new Schema({
    id_pedido: {type: Schema.ObjectId},
    datos_pedido: [{
        id_alimento: {type: Schema.ObjectId, required: true, ref:'alimento'},
        cantidad:{type: Number, required:true},
        extras:[{
            nombre: String,
            precio: Number
        }]
    }],
    datos_cliente:{
        nombre: {type: String, required: true},
        telefono: {type:Number,required: true},
        direccion: {type:String,required: false},
        dni: {type:String,required:true}
    },
    recogida_envio: {type:String,required: true},
    estado_pedido: {type:String, default:'En espera'},
    id_tienda: {type: Schema.ObjectId, required: true, ref:'adminTienda'},
});

module.exports = mongoose.model('pedido', pedidoSchema);