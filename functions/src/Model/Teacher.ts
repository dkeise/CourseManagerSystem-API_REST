export class Teacher{
    id?        :String;
    name       :String;
    cpf        :Number;
    phoneNumber:String;
    adress     :any;
    email      :String;
    password   :String;
    active     :Boolean;

    constructor(body:any){
        this.id          = body.id;
        this.email       = body.email;
        this.password    = body.password;
        this.name        = body.name;
        this.cpf         = body.cpf;
        this.phoneNumber = body.phoneNumber;
        this.adress      = body.adress;
        this.active      = body.active;
    }

}