export class Country {
    static readonly IdName: string = "id";
    static readonly NameName: string = "name";
    static readonly CodeName: string = "code";

    id: number;
    name: string;
    code: string;

    // множественный конструктор не допустим
    static newOne(id:number, code:string, name:string):Country{
        let c=new Country();
        c.id = id;
        c.name = name;
        c.code = code;
        return c;
    }

    constructor() {
        this.id = 0;
        this.name = "";
        this.code = "";
    }
}

export class CountryRegion {

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
