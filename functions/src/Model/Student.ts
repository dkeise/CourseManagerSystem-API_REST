export class Student{
    id?        :String;
    email      :String;
    password   :String;
    active     :Boolean;

    constructor(body:any){
        this.id          = body.id;
        this.email       = body.email;
        this.password    = body.password;
        this.active      = body.active;
    }

}