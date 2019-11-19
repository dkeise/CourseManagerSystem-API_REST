export class Avaliation{
    id?               :String;
    name              :String;
    avaliationCode    :String;
    courseCode        :String;
    active            :Boolean;

    constructor(body:any){
        this.id                = body.id;
        this.name              = body.name;
        this.avaliationCode    = body.avaliationCode;
        this.courseCode        = body.courseCode;
        this.active            = body.active;
    }

}