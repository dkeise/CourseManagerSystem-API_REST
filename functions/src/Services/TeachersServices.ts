import * as admin from "firebase-admin";
import { Teacher } from "../Model/Teacher";
import { DocumentReference, DocumentSnapshot, Firestore, QuerySnapshot } from "@google-cloud/firestore";

export function getTeacherByIdFromFirestore(idOfTeacher:string):Promise<any>{
    return new Promise<any>((resolve,reject)=>{
        const db:Firestore = admin.firestore();

            db.collection("Teachers").doc(idOfTeacher).get().then((document:DocumentSnapshot)=>{
            if(document.exists){
                const teacherDoc = new Teacher(document.data());
                teacherDoc.id    = document.id;
                resolve(teacherDoc);
            }else{
                reject(document);
            }
        }).catch(err=>{
            reject(err);
        });
    });
}

export function getTeacherByLoginFromFirestore(email: string, password: string):Promise<any>{
    return new Promise<any>((resolve,reject)=>{
        const db = admin.firestore();
        db.collection("Teachers").where("email", "==", email).get()
        .then((result:QuerySnapshot) => {
            result.docs.map( teacher => { 
                const newT = new Teacher(teacher.data());
                if (newT.password == password) {
                    resolve (newT);
                }
            });
            reject(result);
        })
        .catch(error=>{reject(error)});
    });
}

export function getAllTeachersFromFirestore():Promise<any> {
    return new Promise<any>((resolve,reject)=>{
        const db = admin.firestore();
        db.collection("Teachers").get().then(snapshot=>{
            const listOfTeacher = Array<Teacher>();
            for (const doc of snapshot.docs){
                const teacher = new Teacher(doc.data());
                teacher.id    = doc.id;
                listOfTeacher.push(teacher);
            }
            resolve(listOfTeacher);
        }).catch(error=>{
            reject(error);
        });
    });
}

export function insertTeacherToFirestore(teacher:Teacher):Promise<any> {
    return new Promise<any>((resolve,reject)=>{
        const db = admin.firestore();
        db.collection("Teachers").add(teacher).then((snapshot:DocumentReference)=>{
            snapshot.get().then((value:DocumentSnapshot)=>{
                const teacherDoc = new Teacher(value.data());
                teacherDoc.id    = value.id;
                resolve(teacherDoc);
            }).catch(error=>{
                reject(error);
            });
        }).catch(error=>{
            reject(error);
        });
        }
    );
}

export function updateTeacherById(idOfTeacher:any,updates:any):Promise<any>{
    return new Promise<any>((resolve,reject)=>{
        const db = admin.firestore();
        db.collection("Teachers").doc(idOfTeacher).update(updates)
        .then(result=>{resolve(result)})
        .catch(error=>{reject(error)});
    });
}