import { insertStudentRegistrationToFirestore, getStudentRegistrationByIdFromFirestore, getAllStudentsRegistrationsFromFirestore, updateStudentRegistrationById } from "../Services/StudentsRegistrationsServices";
import { Request, Response, NextFunction } from "express";


export function insertStudentRegistraion(req:Request,res:Response,next:NextFunction){
    insertStudentRegistrationToFirestore(req.body).then(value=>{
        res.status(201).send(value);
    }).catch(error=>{
        res.status(500).send(error);
    });
}

export function getStudentRegistrationById(req:Request,res:Response,next:NextFunction){
    getStudentRegistrationByIdFromFirestore(req.params.id)
        .then(value=>{res.status(200).send(value)})
        .catch(err=>{res.status(500).send(err)});
}

export function getStudentsRegistrations(req:Request,res:Response,next:NextFunction){
    getAllStudentsRegistrationsFromFirestore().then(values=>{
        res.status(200).send(values);
    }).catch(error=>{
        res.send(error);
    });
}


// export function deleteStudent(req,res,next){
    
// }

 export function updateStudentRegistration(req:Request,res:Response,next:NextFunction){
    updateStudentRegistrationById(req.params.id,req.body)
    .then(value=>{res.status(204).send(value)})
    .catch(erro=>{res.status(400).send(erro)});
}

