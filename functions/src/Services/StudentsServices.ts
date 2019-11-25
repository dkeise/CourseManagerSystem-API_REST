import * as admin from "firebase-admin";
import { Student } from "../Model/Student";
import * as functions from "firebase-functions";
import { DocumentReference, DocumentSnapshot, Firestore, QuerySnapshot} from "@google-cloud/firestore";

admin.initializeApp(functions.config().firebase);

export function getStudentByIdFromFirestore(idOfStudent:string):Promise<any>{
    return new Promise<any>((resolve,reject)=>{
        const db:Firestore = admin.firestore();

            db.collection("Students").doc(idOfStudent).get().then((document:DocumentSnapshot)=>{
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

export function getStudentByLoginFromFirestore(email: string, password: string):Promise<any>{
    return new Promise<any>((resolve,reject)=>{
        const db = admin.firestore();
        db.collection("Students").where("email", "==", email).get()
        .then((result:QuerySnapshot) => {
            result.docs.map( student => { 
                const newS = new Student(student.data());
                if (newS.password == password) {
                    resolve (newS);
                }
            });
            reject(result);
        })
        .catch(error=>{reject(error)});
    });
}

export function getAllStudentsFromFirestore():Promise<any> {
    return new Promise<any>((resolve,reject)=>{
        const db = admin.firestore();
        db.collection("Students").get().then(snapshot=>{
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
        db.collection("Students").add(student).then((snapshot:DocumentReference)=>{
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
        db.collection("Students").doc(idOfStudent).update(updates)
        .then(result=>{resolve(result)})
        .catch(error=>{reject(error)});
    });
}