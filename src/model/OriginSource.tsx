import {Country, CountryRegion} from "./Country";

export class OriginSource {
    static readonly IdName: string = "id";

    id: number;
    name: string;

    countryRegion: CountryRegion;

    constructor() {
        this.id = 0;
        this.name = "";
        this.countryRegion = new CountryRegion();
    }
}