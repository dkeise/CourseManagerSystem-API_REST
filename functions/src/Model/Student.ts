export class Student{
    id?        :String; //ID: do banco de dados do firebase
    email      :String; //email de login
    password   :String; //senha de login
    active     :Boolean; //ativação no banco de dados

    constructor(body:any){ //instanciamento do objeto
        this.id          = body.id;
        this.email       = body.email;
        this.password    = body.password;
        this.active      = body.active;
    }

}