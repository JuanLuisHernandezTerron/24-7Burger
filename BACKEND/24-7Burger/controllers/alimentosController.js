const modelAlimento = require ('./../models/alimentos');
const { response, json } = require('express');

const getAllAlimentos = async function(req,res){
    try{
        const consulta = await modelAlimento.find().exec();
        if (consulta) {
            res.status(200).json(consulta);
        }else{
            res.status(401).json("Productos No encontrados correctamente");
        }
    }catch(e){
        console.log(e);
    }
}

const newAlimento = async function (req,res){
    const Extras= JSON.parse(req.body.extras);
    let arrayExtras = [];
    for (let i = 0; i < Extras.length; i++) {
        arrayExtras.push({nombre:Extras[i].nombre,precio:Extras[i].precio});
    }
    
    try{
        const alimento = {
            nombre:req.body.nombre,
            descripcion:req.body.descripcion,
            ingredientes:req.body.ingredientes,
            alergenos:req.body.alergenos,
            tipoAlimento:req.body.tipoAlimento,
            precio:req.body.precio,
            imagen:'http://localhost:3000/uploads/' + req.file.filename,
            extras:arrayExtras
        };
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

const deleteAlimento = async function (req,res){
    try{
        const searchAlimento = await modelAlimento.find({nombre:req.body.nombre}).exec();
        if (searchAlimento) {
            await modelAlimento.deleteOne({nombre:req.body.nombre}).exec();
            res.status(200).json("Alimento Eliminado Correctamente");
        }else{
            res.status(401).json("Alimento mal Introducido o ya existente")
        }
    }catch(e){
        console.log(e);
    }
}

module.exports = {
    newAlimento,
    deleteAlimento,
    getAllAlimentos
}