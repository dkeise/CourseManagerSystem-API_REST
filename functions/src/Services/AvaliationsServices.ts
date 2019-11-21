import * as admin from "firebase-admin";
import { Avaliation } from "../Model/Avaliation";
import { DocumentReference, DocumentSnapshot, Firestore } from "@google-cloud/firestore";

export function getAvaliationByIdFromFirestore(idOfAvaliation:string):Promise<any>{
    return new Promise<any>((resolve,reject)=>{
        const db:Firestore = admin.firestore();

            db.collection("Avaliations").doc(idOfAvaliation).get().then((document:DocumentSnapshot)=>{
            if(document.exists){
                const avaliationDoc = new Avaliation(document.data());
                avaliationDoc.id    = document.id;
                resolve(avaliationDoc);
            }else{
                reject(document);
            }
        }).catch(err=>{
            reject(err);
        });
    });
}

export function getAllAvaliationsFromFirestore():Promise<any> {
    return new Promise<any>((resolve,reject)=>{
        const db = admin.firestore();
        db.collection("avaliations").get().then(snapshot=>{
            const listOfAvaliation = Array<Avaliation>();
            for (const doc of snapshot.docs){
                const avaliation = new Avaliation(doc.data());
                avaliation.id    = doc.id;
                listOfAvaliation.push(avaliation);
            }
            resolve(listOfAvaliation);
        }).catch(error=>{
            reject(error);
        });
    });
}

export function insertAvaliationToFirestore(avaliation:Avaliation):Promise<any> {
    return new Promise<any>((resolve,reject)=>{
        const db = admin.firestore();
        db.collection("avaliations").add(avaliation).then((snapshot:DocumentReference)=>{
            snapshot.get().then((value:DocumentSnapshot)=>{
               const avaliationDoc = new Avaliation(value.data());
                avaliationDoc.id    = value.id;
                resolve(avaliationDoc);
            }).catch(error=>{
                reject(error);
            });
        }).catch(error=>{
            reject(error);
        });
        }
    );
}

export function updateAvaliationById(idOfAvaliation:any,updates:any):Promise<any>{
    return new Promise<any>((resolve,reject)=>{
        const db = admin.firestore();
        db.collection("avaliations").doc(idOfAvaliation).update(updates)
        .then(result=>{resolve(result)})
        .catch(error=>{reject(error)});
    });
}