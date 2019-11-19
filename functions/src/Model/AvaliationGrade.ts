export class AvaliationGrade{
    id?                     :String;
    name                    :String;
    studentRegistrationCode :String;
    avaliationCode          :String;
    avaliationGradeValue    :Number;
    active                  :Boolean;

    constructor(body:any){
        this.id                      = body.id;
        this.name                    = body.name;
        this.avaliationCode          = body.avaliationCode;
        this.avaliationGradeValue    = body.avaliationGradeValue;
        this.active                  = body.active;
        this.studentRegistrationCode = body.studentRegistrationCode;
    }

}