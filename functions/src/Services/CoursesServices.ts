import * as admin from "firebase-admin";
import { Course } from "../Model/Course";
import { DocumentReference, DocumentSnapshot, Firestore } from "@google-cloud/firestore";

export function getCourseByIdFromFirestore(idOfCourse:string):Promise<any>{
    return new Promise<any>((resolve,reject)=>{
        const db:Firestore = admin.firestore();

            db.collection("courses").doc(idOfCourse).get().then((document:DocumentSnapshot)=>{
            if(document.exists){
                const courseDoc = new Course(document.data());
                courseDoc.id    = document.id;
                resolve(courseDoc);
            }else{
                reject(document);
            }
        }).catch(err=>{
            reject(err);
        });
    });
}

export function getAllCoursesFromFirestore():Promise<any> {
    return new Promise<any>((resolve,reject)=>{
        const db = admin.firestore();
        db.collection("courses").get().then(snapshot=>{
            const listOfCourse = Array<Course>();
            for (const doc of snapshot.docs){
                const course = new Course(doc.data());
                course.id    = doc.id;
                listOfCourse.push(course);
            }
            resolve(listOfCourse);
        }).catch(error=>{
            reject(error);
        });
    });
}

export function insertCourseToFirestore(course:Course):Promise<any> {
    return new Promise<any>((resolve,reject)=>{
        const db = admin.firestore();
        db.collection("courses").add(course).then((snapshot:DocumentReference)=>{
            snapshot.get().then((value:DocumentSnapshot)=>{
               const courseDoc = new Course(value.data());
                courseDoc.id    = value.id;
                resolve(courseDoc);
            }).catch(error=>{
                reject(error);
            });
        }).catch(error=>{
            reject(error);
        });
        }
    );
}

export function updateCourseById(idOfCourse:any,updates:any):Promise<any>{
    return new Promise<any>((resolve,reject)=>{
        const db = admin.firestore();
        db.collection("courses").doc(idOfCourse).update(updates)
        .then(result=>{resolve(result)})
        .catch(error=>{reject(error)});
    });
}