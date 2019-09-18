export class Products {
    objid:string;
    id:number;
    name:string;
    description:string;
    price:number;
    units:number;

    constructor(objid:string,_id:number,_name:string,_description:string,_price:number,_units:number)
    {
        this.objid = objid;
        this.id = _id;
        this.name = _name;
        this.description = _description;
        this.price = _price;
        this.units = _units;
    }
}
