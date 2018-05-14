export class Party {
    static readonly IdName: string = "id";
    static readonly NameName: string = "name";
    static readonly AddressName: string = "address";
    static readonly RepresentativeName: string = "representative";

    id: number;
    name: string;
    address: string;
    representative: string;

    // множественный конструктор не допустим
    static newOne(id: number, name: string, address: string, representative: string): Party {
        let c = new Party();
        c.id = id;
        c.name = name;
        c.address = address;
        c.representative = representative;
        return c;
    }

    constructor() {
        this.id = 0;
        this.name = "";
        this.address = "";
        this.representative = "";
    }
}
