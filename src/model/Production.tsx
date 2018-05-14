import {Classification} from "./Classification";
import {OriginSource} from "./OriginSource";
import {ProductPackage} from "./ProductPackage";

export class Production {
    static readonly IdName: string = "id";

    id: number;
    classification: Classification;
    originSource: OriginSource;
    productPackage: ProductPackage[];
    commonName: string;
    scientificName: string;
    sequence: number;
    description: string;
    productionBatch:string;
    comments:string;
    expiry:Date;
    intendedUse:string;

    //productWeight
    idWeight:number;
    grossWeight:number;
    netWeight:number;
    grossValue:number;
    netValue:number;

    constructor() {
        this.id = 0;
        this.classification = new Classification();
        this.originSource = new OriginSource();
        this.productPackage = [];
        this.commonName = "";
        this.scientificName = "";
        this.sequence = 0;
        this.description = "";
        this.productionBatch = "";
        this.comments = "";
        this.expiry = new Date();
        this.intendedUse = "";

        this.idWeight=0;
        this.grossWeight=0;
        this.netWeight=0;
        this.grossValue=0;
        this.netValue=0;
    }
}
