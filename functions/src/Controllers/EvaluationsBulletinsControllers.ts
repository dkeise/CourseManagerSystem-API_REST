import { insertEvaluationBulletinToFirestore, getEvaluationBulletinByIdFromFirestore, getAllEvaluationBulletinsFromFirestore, updateEvaluationBulletinById } from "../Services/EvaluationsBulletinsServices";
import { Request, Response, NextFunction } from "express";


export function insertEvaluationBulletin(req:Request,res:Response,next:NextFunction){
    insertEvaluationBulletinToFirestore(req.body).then(value=>{
        res.status(201).send(value);
    }).catch(error=>{
        res.status(500).send(error);
    });
}

export function getEvaluationBulletinById(req:Request,res:Response,next:NextFunction){
    getEvaluationBulletinByIdFromFirestore(req.params.id)
        .then(value=>{res.status(200).send(value)})
        .catch(err=>{res.status(500).send(err)});
}

export function getEvaluationsBulletins(req:Request,res:Response,next:NextFunction){
    getAllEvaluationBulletinsFromFirestore().then(values=>{
        res.status(200).send(values);
    }).catch(error=>{
        res.send(error);
    });
}


// export function deleteEvaluationBulletins(req,res,next){
    
// }

 export function updateEvaluationBulletin(req:Request,res:Response,next:NextFunction){
    updateEvaluationBulletinById(req.params.id,req.body)
    .then(value=>{res.status(204).send(value)})
    .catch(erro=>{res.status(400).send(erro)});
}

