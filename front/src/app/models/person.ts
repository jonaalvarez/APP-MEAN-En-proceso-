export class Person {

    constructor(_id = '', name = '', position = '', team = '', price = 0){
        this._id = _id;
        this.name = name;
        this.position = position;
        this.team = team;
        this.price = price;
    }

    _id: string;
    name: string;
    position: string;
    team: string;
    price: number;
}
