import {Country} from "./Country";

export class Port {
    static readonly IdName: string = "id";
    static readonly NameName: string = "name";

    id: number;
    name: string;
    country: Country;

    constructor() {
        this.id = 0;
        this.name = "";
        this.country = new Country();
    }
}