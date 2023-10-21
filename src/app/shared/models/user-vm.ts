export class UserVM {
    id:string;
    erp:string;
    firstName:string;
    lastName:string;
    email:string;
    phone:string;
    role:string;
    password:string;
    isActive:boolean;
    constructor(){
        this.id='';
        this.erp='';
        this.firstName='';
        this.lastName='';
        this.email='';
        this.role='';
        this.phone='';
        this.password='';
        this.isActive = true;
    }
}
