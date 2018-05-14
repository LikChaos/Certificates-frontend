export class Consignment {
    static readonly IdName: string = "id";

    id: number;
    availabilityDate: Date;
    exportExit: Date;

    shipStore: ShipStore;
    cargoType:CargoType;

    constructor() {
        this.id = 0;
        this.availabilityDate = new Date();
        this.exportExit = new Date();
        this.shipStore = new ShipStore();
        this.cargoType = new CargoType();
    }
}

export class ShipStore {
    static readonly IdName: string = "id";
    static readonly NameName: string = "name";

    id: number;
    name: string;

    constructor() {
        this.id = 0;
        this.name = "";
    }
}

export class CargoType {
    static readonly IdName: string = "id";
    static readonly NameName: string = "name";

    id: number;
    name: string;

    constructor() {
        this.id = 0;
        this.name = "";
    }
}
