export class StudentRegistration{
    id?               :String;
    registrationCode  :String;
    cpf               :Number;
    courseCode        :String;
    registrationDate  :any;
    active            :Boolean;

    constructor(body:any){
        this.id                = body.id;
        this.registrationCode  = body.registrationCode;
        this.cpf               = body.cpf;
        this.courseCode        = body.courseCode;
        this.registrationDate  = body.registrationDate;
        this.active            = body.active;
    }

}