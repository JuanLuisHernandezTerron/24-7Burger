const modelAlimento = require ('./../models/alimentos');
const { response } = require('express');


const newAlimento = async function (req,res){
    try{
        const alimento = {
            nombre:req.body.nombre,
            descripcion:req.body.descripcion,
            ingredientes:req.body.ingredientes,
            alergenos:req.body.alergenos,
            tipoAlimento:req.body.tipoAlimento,
            precio:req.body.precio,
            imagen:'http://localhost:3000/uploads/' + req.file.filename,
            extras:req.body.extras
        };
        console.log(alimento);

        let filterAlimento = await modelAlimento.findOne({nombre:alimento.nombre}).exec();
        if (filterAlimento) {
            res.status(401).json("Alimento mal Introducido o ya existente")
        }else{
            await modelAlimento.create(alimento);
            res.status(200).json("Alimento Creado Correctamente");
        }
    }catch(e){
        console.log(e);
    }
}

module.exports = {
    newAlimento
}