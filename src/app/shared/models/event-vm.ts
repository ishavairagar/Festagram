import { Time } from "@angular/common";

export class EventVM {
    id:string;
    eventName:string;
    StartDate: Date;
    EndDate: Date;
    time:Time;
    fees:number;
    image:Photo;
    description:string;
    venue:string;
    teacherName:string;
    cooridinatorName:string;
    isEventActive:boolean;
    constructor(){
        this.id='';
        this.eventName='';
        this.StartDate = new Date();
        this.EndDate = 've';
        this.time='';
        this.fees='';
        this.image
        this.description='';
        this.venue='';
        this.teacherName='';
        this.cooridinatorName='';
        this.isActive='true';
    }
}
