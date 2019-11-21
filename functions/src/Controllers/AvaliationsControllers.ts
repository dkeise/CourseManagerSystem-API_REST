import { insertAvaliationToFirestore, getAvaliationByIdFromFirestore, getAllAvaliationsFromFirestore, updateAvaliationById } from "../Services/AvaliationsServices";
import { Request, Response, NextFunction } from "express";


export function insertAvaliation(req:Request,res:Response,next:NextFunction){
    insertAvaliationToFirestore(req.body).then(value=>{
        res.status(201).send(value);
    }).catch(error=>{
        res.status(500).send(error);
    });
}

export function getAvaliationById(req:Request,res:Response,next:NextFunction){
    getAvaliationByIdFromFirestore(req.params.id)
        .then(value=>{res.status(200).send(value)})
        .catch(err=>{res.status(500).send(err)});
}

export function getAvaliations(req:Request,res:Response,next:NextFunction){
    getAllAvaliationsFromFirestore().then(values=>{
        res.status(200).send(values);
    }).catch(error=>{
        res.send(error);
    });
}


// export function deleteAvaliation(req,res,next){
    
// }

 export function updateAvaliation(req:Request,res:Response,next:NextFunction){
    updateAvaliationById(req.params.id,req.body)
    .then(value=>{res.status(204).send(value)})
    .catch(erro=>{res.status(400).send(erro)});
}

