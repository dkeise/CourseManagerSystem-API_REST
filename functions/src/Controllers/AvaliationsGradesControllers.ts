import { insertAvaliationGradeToFirestore, getAvaliationsGradeByIdFromFirestore, getAllAvaliationGradesFromFirestore, updateAvaliationGradeById } from "../Services/AvaliationsGradesServices";
import { Request, Response, NextFunction } from "express";


export function insertAvaliationGrade(req:Request,res:Response,next:NextFunction){
    insertAvaliationGradeToFirestore(req.body).then(value=>{
        res.status(201).send(value);
    }).catch(error=>{
        res.status(500).send(error);
    });
}

export function getAvaliationGradeById(req:Request,res:Response,next:NextFunction){
    getAvaliationsGradeByIdFromFirestore(req.params.id)
        .then(value=>{res.status(200).send(value)})
        .catch(err=>{res.status(500).send(err)});
}

export function getAvaliationsGrades(req:Request,res:Response,next:NextFunction){
    getAllAvaliationGradesFromFirestore().then(values=>{
        res.status(200).send(values);
    }).catch(error=>{
        res.send(error);
    });
}


// export function deleteAvaliationGrades(req,res,next){
    
// }

 export function updateAvaliationGrade(req:Request,res:Response,next:NextFunction){
    updateAvaliationGradeById(req.params.id,req.body)
    .then(value=>{res.status(204).send(value)})
    .catch(erro=>{res.status(400).send(erro)});
}

