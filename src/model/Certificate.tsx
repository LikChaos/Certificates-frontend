import {Party} from "./Party";
import {Country} from "./Country";
import {Production} from "./Production";
import {Consignment} from "./Consignment";
import {Port} from "./Port";

export class Certificate {
    // Значения параметров должно совпадать c названием полей
    // таблица трбует названия полей в текстовом виде
    // ну и, дабы избежать ошибки отсутсвия какого либо поля, вводятся такие поля
    // Rename полей в WebStorm работает корректно

    static readonly IdName: string = "id";
    static readonly CodeName: string = "code";

    // certificateHeader
    id: number;
    importingCompany: Party;//done
    exportingCompany: Party;//done
    transitCountries: Country[];//done
    consignment: Consignment;//done
    dischargePort: Port;
    loadingPort: Port;//done
    product: Production;
    importingCountry: Country;
    exportingCountry: Country;

    // certificate //done
    idCertificate: number;
    identification: string;
    name: string;
    description: string;
    copy: boolean;
    status: CertificateStatus;
    type: CertificateType;
    issueData: Date;




    code: string;

    constructor() {
        this.id = 0;
        this.importingCompany = new Party();
        this.exportingCompany = new Party();
        this.transitCountries = [];
        this.product = new Production();
        this.consignment = new Consignment();
        this.dischargePort = new Port();
        this.loadingPort = new Port();
        this.importingCountry = new Country();
        this.exportingCountry = new Country();

        this.idCertificate = 0;
        this.identification = "";
        this.description = "";
        this.copy = false;
        this.status = new CertificateStatus();
        this.type = new CertificateType();
        this.issueData = new Date();


        this.code = "";
    }
}

export class CertificateStatus {
    static readonly IdName: string = "id";
    static readonly NameName: string = "name";

    id: number;
    name: string;

    constructor() {
        this.id = 0;
        this.name = "";
    }
}

export class CertificateType {
    static readonly IdName: string = "id";
    static readonly NameName: string = "name";

    id: number;
    name: string;

    constructor() {
        this.id = 0;
        this.name = "";
    }
}
