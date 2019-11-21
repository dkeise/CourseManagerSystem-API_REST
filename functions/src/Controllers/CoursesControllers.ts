import { insertCourseToFirestore, getCourseByIdFromFirestore, getAllCoursesFromFirestore, updateCourseById } from "../Services/CoursesServices";
import { Request, Response, NextFunction } from "express";


export function insertCourse(req:Request,res:Response,next:NextFunction){
    insertCourseToFirestore(req.body).then(value=>{
        res.status(201).send(value);
    }).catch(error=>{
        res.status(500).send(error);
    });
}

export function getCourseById(req:Request,res:Response,next:NextFunction){
    getCourseByIdFromFirestore(req.params.id)
        .then(value=>{res.status(200).send(value)})
        .catch(err=>{res.status(500).send(err)});
}

export function getCourses(req:Request,res:Response,next:NextFunction){
    getAllCoursesFromFirestore().then(values=>{
        res.status(200).send(values);
    }).catch(error=>{
        res.send(error);
    });
}


// export function deleteCourse(req,res,next){
    
// }

 export function updateCourse(req:Request,res:Response,next:NextFunction){
    updateCourseById(req.params.id,req.body)
    .then(value=>{res.status(204).send(value)})
    .catch(erro=>{res.status(400).send(erro)});
}

