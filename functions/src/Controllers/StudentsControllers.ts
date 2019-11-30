import { insertStudentToFirestore, getAllStudentsFromFirestore, getStudentByIdFromFirestore, updateStudentById, getStudentByLoginFromFirestore} from "../Services/StudentsServices";
import { Request, Response, NextFunction } from "express";


export function insertStudent(req:Request,res:Response,next:NextFunction){ //chama a função dos services se não houver error na solicitação
    insertStudentToFirestore(req.body).then(value=>{
        res.status(201).send(value);
    }).catch(error=>{
        res.status(500).send(error);
    });
}

export function getStudentById(req:Request,res:Response,next:NextFunction){ //chama a função dos services se não houver error na solicitação
    getStudentByIdFromFirestore(req.params.id)
        .then(value=>{res.status(200).send(value)})
        .catch(err=>{res.status(500).send(err)});
}

export function getStudentByLogin(req:Request,res:Response,next:NextFunction){ //chama a função dos services se não houver error na solicitação
    getStudentByLoginFromFirestore(req.params.email, req.params.password)
        .then(value=>{res.status(200).send(value)})
        .catch(err=>{res.status(700).send(err)});
}

export function getStudents(req:Request,res:Response,next:NextFunction){ //chama a função dos services se não houver error na solicitação
    getAllStudentsFromFirestore().then(values=>{
        res.status(200).send(values);
    }).catch(error=>{
        res.send(error);
    });
}


// export function deleteStudent(req,res,next){
    
// }

 export function updateStudent(req:Request,res:Response,next:NextFunction){ //chama a função dos services se não houver error na solicitação
    updateStudentById(req.params.id,req.body)
    .then(value=>{res.status(204).send(value)})
    .catch(erro=>{res.status(400).send(erro)});
}

