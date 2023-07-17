var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var alimentosSchema = new Schema({
    id_alimentos: {type: Schema.ObjectId, required: true},
    nombre: {type: String,required:true},
    descripcion: {type:String,required: true},
    ingredientes: [{type:String, required:true}],
    alergenos:[{type:String, required:true}],
    tipoAlimento:{type:String,required:true,enum:['Hamburguesa','Bebida','Postre']},
    precio:{type:Number,required:true},
    extras:[{type:String}],
});

module.exports = mongoose.model('alimento', alimentosSchema);