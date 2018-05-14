export class ProductPackage {
    static readonly IdName: string = "id";
    static readonly NameName: string = "name";

    id: number;
    level: number;
    grossWeight: number;
    netWeight: number;
    packageType: PackageType;
    shippingMark: string;

    constructor() {
        this.id = 0;
        this.level = 0;
        this.grossWeight = 0;
        this.netWeight = 0;
        this.packageType = new PackageType();
        this.shippingMark = "";
    }
}

export class PackageType {
    static readonly IdName: string = "id";
    static readonly NameName: string = "name";

    id: number;
    name: string;

    constructor() {
        this.id = 0;
        this.name = "";
    }
}
