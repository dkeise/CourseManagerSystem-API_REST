import * as admin from "firebase-admin";
import { EvaluationBulletin } from "../Model/EvaluationBulletin";
import { DocumentReference, DocumentSnapshot, Firestore } from "@google-cloud/firestore";

export function getEvaluationBulletinByIdFromFirestore(idOfEvaluationBulletin:string):Promise<any>{
    return new Promise<any>((resolve,reject)=>{
        const db:Firestore = admin.firestore();

            db.collection("evaluationBulletins").doc(idOfEvaluationBulletin).get().then((document:DocumentSnapshot)=>{
            if(document.exists){
                const evaluationBulletinDoc = new EvaluationBulletin(document.data());
                evaluationBulletinDoc.id    = document.id;
                resolve(evaluationBulletinDoc);
            }else{
                reject(document);
            }
        }).catch(err=>{
            reject(err);
        });
    });
}

export function getAllEvaluationBulletinsFromFirestore():Promise<any> {
    return new Promise<any>((resolve,reject)=>{
        const db = admin.firestore();
        db.collection("evaluationBulletins").get().then(snapshot=>{
            const listOfEvaluationBulletin = Array<EvaluationBulletin>();
            for (const doc of snapshot.docs){
                const evaluationBulletin = new EvaluationBulletin(doc.data());
                evaluationBulletin.id    = doc.id;
                listOfEvaluationBulletin.push(evaluationBulletin);
            }
            resolve(listOfEvaluationBulletin);
        }).catch(error=>{
            reject(error);
        });
    });
}

export function insertEvaluationBulletinToFirestore(evaluationBulletin:EvaluationBulletin):Promise<any> {
    return new Promise<any>((resolve,reject)=>{
        const db = admin.firestore();
        db.collection("evaluationBulletins").add(evaluationBulletin).then((snapshot:DocumentReference)=>{
            snapshot.get().then((value:DocumentSnapshot)=>{
               const evaluationBulletinDoc = new EvaluationBulletin(value.data());
                evaluationBulletinDoc.id    = value.id;
                resolve(evaluationBulletinDoc);
            }).catch(error=>{
                reject(error);
            });
        }).catch(error=>{
            reject(error);
        });
        }
    );
}

export function updateEvaluationBulletinsById(idOfEvaluationBulletin:any,updates:any):Promise<any>{
    return new Promise<any>((resolve,reject)=>{
        const db = admin.firestore();
        db.collection("evaluationBulletins").doc(idOfEvaluationBulletin).update(updates)
        .then(result=>{resolve(result)})
        .catch(error=>{reject(error)});
    });
}