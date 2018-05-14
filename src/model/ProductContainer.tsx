export class ProductContainer {
    static readonly IdName: string = "id";

    id: number;
    sealIdentification: string;
    sealMaximumIdentification: string;

    constructor() {
        this.id = 0;
        this.sealIdentification = "";
        this.sealMaximumIdentification = "";
    }
}