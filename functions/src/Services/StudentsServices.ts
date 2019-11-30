import * as admin from "firebase-admin";
import { Student } from "../Model/Student";
import * as functions from "firebase-functions";
import { DocumentReference, DocumentSnapshot, Firestore, QuerySnapshot} from "@google-cloud/firestore";

admin.initializeApp(functions.config().firebase);

export function getStudentByIdFromFirestore(idOfStudent:string):Promise<any>{ //retorna estudante por ID
    return new Promise<any>((resolve,reject)=>{
        const db:Firestore = admin.firestore();

            db.collection("Students").doc(idOfStudent).get().then((document:DocumentSnapshot)=>{ //Get coleção do firebase
            if(document.exists){
                const studentDoc = new Student(document.data()); //instancia o objeto
                studentDoc.id    = document.id;
                resolve(studentDoc); //retorna o objeto coleção
            }else{
                reject(document);
            }
        }).catch(err=>{
            reject(err); //caso o bloco acima falhe, retorna erro nesta linha
        });
    });
}

export function getStudentByLoginFromFirestore(email: string, password: string):Promise<any>{ //retorna estudante por LOGIN (email e password)
    return new Promise<any>((resolve,reject)=>{
        const db = admin.firestore();
        db.collection("Students").where("email", "==", email).get() //por Query verifica email
        .then((result:QuerySnapshot) => {
            result.docs.map( student => { 
                const newS = new Student(student.data());
                if (newS.password == password) { //por atributo verifica igualdade de senha por parametro e atributo
                    resolve (newS); //retorna o perfil se achado
                }
            });
            reject(result); //rejeita os dados se não achado
        })
        .catch(error=>{reject(error)}); //retorna erro caso não tenha e-mail
    });
}

export function getAllStudentsFromFirestore():Promise<any> { //retorna todos os alunos
    return new Promise<any>((resolve,reject)=>{
        const db = admin.firestore();
        db.collection("Students").get().then(snapshot=>{ //coleção de alunos do firebase
            const listOfStudent = Array<Student>();
            for (const doc of snapshot.docs){
                const student = new Student(doc.data()); // instancia um objeto
                student.id    = doc.id;
                listOfStudent.push(student); // joga no array de objeto
            }
            resolve(listOfStudent); // retorna o array
        }).catch(error=>{
            reject(error); // erro
        });
    });
}

export function insertStudentToFirestore(student:Student):Promise<any> { //insere um novo objeto
    return new Promise<any>((resolve,reject)=>{
        const db = admin.firestore();
        db.collection("Students").add(student).then((snapshot:DocumentReference)=>{ // coleção do objeto
            snapshot.get().then((value:DocumentSnapshot)=>{
               const studentDoc = new Student(value.data()); //instancia o objeto
                studentDoc.id    = value.id;
                resolve(studentDoc); //retorna o objeto
            }).catch(error=>{
                reject(error); //error
            });
        }).catch(error=>{
            reject(error); //error
        });
        }
    );
}

export function updateStudentById(idOfStudent:any,updates:any):Promise<any>{ //atualiza o objeto com novo dado
    return new Promise<any>((resolve,reject)=>{
        const db = admin.firestore();
        db.collection("Students").doc(idOfStudent).update(updates)
        .then(result=>{resolve(result)})
        .catch(error=>{reject(error)});
    });
}