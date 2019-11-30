import { insertTeacherToFirestore, getAllTeachersFromFirestore, getTeacherByIdFromFirestore, updateTeacherById, getTeacherByLoginFromFirestore } from "../Services/TeachersServices";
import { Request, Response, NextFunction } from "express";


export function insertTeacher(req:Request,res:Response,next:NextFunction){ //chama a função dos services se não houver error na solicitação
    insertTeacherToFirestore(req.body).then(value=>{
        res.status(201).send(value);
    }).catch(error=>{
        res.status(500).send(error);
    });
}

export function getTeacherById(req:Request,res:Response,next:NextFunction){ //chama a função dos services se não houver error na solicitação
    getTeacherByIdFromFirestore(req.params.id)
        .then(value=>{res.status(200).send(value)})
        .catch(err=>{res.status(800).send(err)});
}

export function getTeacherByLogin(req:Request,res:Response,next:NextFunction){ //chama a função dos services se não houver error na solicitação
    getTeacherByLoginFromFirestore(req.params.email, req.params.password)
        .then(value=>{res.status(200).send(value)})
        .catch(err=>{res.status(700).send(err)});
}

export function getTeachers(req:Request,res:Response,next:NextFunction){ //chama a função dos services se não houver error na solicitação
    getAllTeachersFromFirestore().then(values=>{
        res.status(200).send(values);
    }).catch(error=>{
        res.send(error);
    });
}


// export function deleteTeacher(req,res,next){
    
// }

 export function updateTeacher(req:Request,res:Response,next:NextFunction){
    updateTeacherById(req.params.id,req.body)
    .then(value=>{res.status(204).send(value)})
    .catch(erro=>{res.status(400).send(erro)});
}

