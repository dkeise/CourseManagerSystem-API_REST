import * as admin from "firebase-admin";
import { AvaliationGrade } from "../Model/AvaliationGrade";
import { DocumentReference, DocumentSnapshot, Firestore } from "@google-cloud/firestore";

export function getAvaliationsGradeByIdFromFirestore(idOfAvaliationGrade:string):Promise<any>{
    return new Promise<any>((resolve,reject)=>{
        const db:Firestore = admin.firestore();

            db.collection("avaliationGrades").doc(idOfAvaliationGrade).get().then((document:DocumentSnapshot)=>{
            if(document.exists){
                const avaliationGradeDoc = new AvaliationGrade(document.data());
                avaliationGradeDoc.id    = document.id;
                resolve(avaliationGradeDoc);
            }else{
                reject(document);
            }
        }).catch(err=>{
            reject(err);
        });
    });
}

export function getAllAvaliationGradesFromFirestore():Promise<any> {
    return new Promise<any>((resolve,reject)=>{
        const db = admin.firestore();
        db.collection("avaliationGrades").get().then(snapshot=>{
            const listOfAvaliationGrade = Array<AvaliationGrade>();
            for (const doc of snapshot.docs){
                const avaliationGrade = new AvaliationGrade(doc.data());
                avaliationGrade.id    = doc.id;
                listOfAvaliationGrade.push(avaliationGrade);
            }
            resolve(listOfAvaliationGrade);
        }).catch(error=>{
            reject(error);
        });
    });
}

export function insertAvaliationGradeToFirestore(avaliationGrade:AvaliationGrade):Promise<any> {
    return new Promise<any>((resolve,reject)=>{
        const db = admin.firestore();
        db.collection("avaliationGrades").add(avaliationGrade).then((snapshot:DocumentReference)=>{
            snapshot.get().then((value:DocumentSnapshot)=>{
               const avaliationGradeDoc = new AvaliationGrade(value.data());
                avaliationGradeDoc.id    = value.id;
                resolve(avaliationGradeDoc);
            }).catch(error=>{
                reject(error);
            });
        }).catch(error=>{
            reject(error);
        });
        }
    );
}

export function updateAvaliationGradeById(idOfAvaliationGrade:any,updates:any):Promise<any>{
    return new Promise<any>((resolve,reject)=>{
        const db = admin.firestore();
        db.collection("avaliationGrades").doc(idOfAvaliationGrade).update(updates)
        .then(result=>{resolve(result)})
        .catch(error=>{reject(error)});
    });
}