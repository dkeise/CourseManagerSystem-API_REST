import * as admin from "firebase-admin";
import { StudentRegistration } from "../Model/StudentRegistration";
import { DocumentReference, DocumentSnapshot, Firestore } from "@google-cloud/firestore";

export function getStudentRegistrationByIdFromFirestore(idOfStudentRegistration:string):Promise<any>{
    return new Promise<any>((resolve,reject)=>{
        const db:Firestore = admin.firestore();

            db.collection("studentsRegistrations").doc(idOfStudentRegistration).get().then((document:DocumentSnapshot)=>{
            if(document.exists){
                const studentRegistrationDoc = new StudentRegistration(document.data());
                studentRegistrationDoc.id    = document.id;
                resolve(studentRegistrationDoc);
            }else{
                reject(document);
            }
        }).catch(err=>{
            reject(err);
        });
    });
}

export function getAllStudentsRegistrationsFromFirestore():Promise<any> {
    return new Promise<any>((resolve,reject)=>{
        const db = admin.firestore();
        db.collection("studentsRegistrations").get().then(snapshot=>{
            const listOfStudentRegistration = Array<StudentRegistration>();
            for (const doc of snapshot.docs){
                const studentRegistration = new StudentRegistration(doc.data());
                studentRegistration.id    = doc.id;
                listOfStudentRegistration.push(studentRegistration);
            }
            resolve(listOfStudentRegistration);
        }).catch(error=>{
            reject(error);
        });
    });
}

export function insertStudentRegistrationToFirestore(studentRegistration:StudentRegistration):Promise<any> {
    return new Promise<any>((resolve,reject)=>{
        const db = admin.firestore();
        db.collection("studentsRegistrations").add(studentRegistration).then((snapshot:DocumentReference)=>{
            snapshot.get().then((value:DocumentSnapshot)=>{
               const studentRegistrationDoc = new StudentRegistration(value.data());
                studentRegistrationDoc.id    = value.id;
                resolve(studentRegistrationDoc);
            }).catch(error=>{
                reject(error);
            });
        }).catch(error=>{
            reject(error);
        });
        }
    );
}

export function updateStudentRegistrationById(idOfStudentsRegistrations:any,updates:any):Promise<any>{
    return new Promise<any>((resolve,reject)=>{
        const db = admin.firestore();
        db.collection("studentsRegistrations").doc(idOfStudentsRegistrations).update(updates)
        .then(result=>{resolve(result)})
        .catch(error=>{reject(error)});
    });
}