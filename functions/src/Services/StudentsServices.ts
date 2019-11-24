import * as admin from "firebase-admin";
import { Student } from "../Model/Student";
import * as functions from "firebase-functions";
import { DocumentReference, DocumentSnapshot, Firestore} from "@google-cloud/firestore";

admin.initializeApp(functions.config().firebase);

export function getStudentByIdFromFirestore(idOfStudent:string):Promise<any>{
    return new Promise<any>((resolve,reject)=>{
        const db:Firestore = admin.firestore();

            db.collection("students").doc(idOfStudent).get().then((document:DocumentSnapshot)=>{
            if(document.exists){
                const studentDoc = new Student(document.data());
                studentDoc.id    = document.id;
                resolve(studentDoc);
            }else{
                reject(document);
            }
        }).catch(err=>{
            reject(err);
        });
    });
}

export function getStudentByLogInFromFirestore(email:string):Promise<any>{
    return new Promise<any>((resolve,reject)=>{
        const db:Firestore = admin.firestore();
            db.collection("students").where("email","==",email).get()
            .then((result) => {
                result.docs.map( student => {
                    const newStudent = new Student(student.data())
                   // if(newStudent.password == password){
                        resolve(newStudent);
                   // }
                })
            }).catch(error=>{
              reject(error);
             });
        });
}

export function getAllStudentsFromFirestore():Promise<any> {
    return new Promise<any>((resolve,reject)=>{
        const db = admin.firestore();
        db.collection("students").get().then(snapshot=>{
            const listOfStudent = Array<Student>();
            for (const doc of snapshot.docs){
                const student = new Student(doc.data());
                student.id    = doc.id;
                listOfStudent.push(student);
            }
            resolve(listOfStudent);
        }).catch(error=>{
            reject(error);
        });
    });
}

export function insertStudentToFirestore(student:Student):Promise<any> {
    return new Promise<any>((resolve,reject)=>{
        const db = admin.firestore();
        db.collection("students").add(student).then((snapshot:DocumentReference)=>{
            snapshot.get().then((value:DocumentSnapshot)=>{
               const studentDoc = new Student(value.data());
                studentDoc.id    = value.id;
                resolve(studentDoc);
            }).catch(error=>{
                reject(error);
            });
        }).catch(error=>{
            reject(error);
        });
        }
    );
}

export function updateStudentById(idOfStudent:any,updates:any):Promise<any>{
    return new Promise<any>((resolve,reject)=>{
        const db = admin.firestore();
        db.collection("students").doc(idOfStudent).update(updates)
        .then(result=>{resolve(result)})
        .catch(error=>{reject(error)});
    });
}