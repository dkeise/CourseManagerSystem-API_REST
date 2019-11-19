export class EvaluationBulletin{
    id?                     :String;
    name                    :String;
    studentRegistrationCode :String;
    avaliationCode          :String;
    finalAvaliationGrade    :Number;
    courseCode              :String;
    finalSituation          :String;
    semester                :any;
    active                  :Boolean;

    constructor(body:any){
        this.id                      = body.id;
        this.name                    = body.name;
        this.avaliationCode          = body.avaliationCode;
        this.finalAvaliationGrade    = body.finalAvaliationGrade;
        this.active                  = body.active;
        this.studentRegistrationCode = body.studentRegistrationCode;
        this.courseCode              = body.courseCode;
        this.finalSituation          = body.finalSituation;
    }

}