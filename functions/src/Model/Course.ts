export class Course{
    id?               :String;
    name              :String;
    semester          :any; //Here can be Number or any, if be number, in client i can read this value and set in struct situation, that situation is about first, second, third, ... etc semester / period
    courseCode        :String;
    active            :Boolean;

    constructor(body:any){
        this.id                = body.id;
        this.name              = body.name;
        this.semester          = body.semester;
        this.courseCode        = body.courseCode;
        this.active            = body.active;
    }

}