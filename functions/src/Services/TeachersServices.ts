import * as admin from "firebase-admin";
import { Teacher } from "../Model/Teacher";
import { DocumentReference, DocumentSnapshot, Firestore, QuerySnapshot } from "@google-cloud/firestore";

export function getTeacherByIdFromFirestore(idOfTeacher:string):Promise<any>{ //retorna professor por ID
    return new Promise<any>((resolve,reject)=>{
        const db:Firestore = admin.firestore();

            db.collection("Teachers").doc(idOfTeacher).get().then((document:DocumentSnapshot)=>{ //Get coleção do firebase
            if(document.exists){
                const teacherDoc = new Teacher(document.data()); //instancia o objeto
                teacherDoc.id    = document.id;
                resolve(teacherDoc); //retorna o objeto coleção
            }else{
                reject(document);
            }
        }).catch(err=>{ 
            reject(err); //caso o bloco acima falhe, retorna erro nesta linha
        });
    });
}

export function getTeacherByLoginFromFirestore(email: string, password: string):Promise<any>{ //retorna professores por LOGIN (email e password)
    return new Promise<any>((resolve,reject)=>{
        const db = admin.firestore();
        db.collection("Teachers").where("email", "==", email).get()
        .then((result:QuerySnapshot) => {
            result.docs.map( teacher => { 
                const newT = new Teacher(teacher.data());
                if (newT.password == password) { //por atributo verifica igualdade de senha por parametro e atributo
                    resolve (newT); //retorna o perfil se achado
                }
            });
            reject(result); //rejeita os dados se não achado
        })
        .catch(error=>{reject(error)}); //retorna erro caso não tenha e-mail
    });
}

export function getAllTeachersFromFirestore():Promise<any> { //retorna todos os professores
    return new Promise<any>((resolve,reject)=>{
        const db = admin.firestore();
        db.collection("Teachers").get().then(snapshot=>{ //coleção de professores do firebase
            const listOfTeacher = Array<Teacher>();
            for (const doc of snapshot.docs){
                const teacher = new Teacher(doc.data()); // instancia um objeto
                teacher.id    = doc.id;
                listOfTeacher.push(teacher); // joga no array de objeto
            }
            resolve(listOfTeacher); // retorna o array
        }).catch(error=>{
            reject(error); // erro
        });
    });
}

export function insertTeacherToFirestore(teacher:Teacher):Promise<any> { //insere um novo objeto
    return new Promise<any>((resolve,reject)=>{
        const db = admin.firestore();
        db.collection("Teachers").add(teacher).then((snapshot:DocumentReference)=>{ // coleção do objeto
            snapshot.get().then((value:DocumentSnapshot)=>{
                const teacherDoc = new Teacher(value.data()); //instancia o objeto
                teacherDoc.id    = value.id;
                resolve(teacherDoc); //retorna o objeto
            }).catch(error=>{
                reject(error); //error
            });
        }).catch(error=>{
            reject(error); //error
        });
        }
    );
}

export function updateTeacherById(idOfTeacher:any,updates:any):Promise<any>{ //atualiza o objeto com novo dado
    return new Promise<any>((resolve,reject)=>{
        const db = admin.firestore();
        db.collection("Teachers").doc(idOfTeacher).update(updates) // coleção do objeto
        .then(result=>{resolve(result)})
        .catch(error=>{reject(error)});
    });
}