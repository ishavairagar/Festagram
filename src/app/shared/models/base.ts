export class Base {
    createdBy: number;
    createdOn: Date;
    modifiedOn: Date;
    modifiedBy: number;

    constructor(){
        this.createdBy = 0;
        this.createdOn = new Date();
        this.modifiedOn = new Date();
        this.modifiedBy = 0 ;

    }
}