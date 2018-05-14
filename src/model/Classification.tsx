export class Classification {

    id: number;
    name: string;
    latinName: string;

    classificationSystem: ClassificationSystem;
    classificationClass: ClassificationClass;

    constructor() {
        this.id = 0;
        this.name = "";
        this.latinName = ""
    }
}

export class ClassificationSystem{
    id: number;
    name: string;

    constructor() {
        this.id = 0;
        this.name = "";
    }
}

export class ClassificationClass{
    id: number;
    name: string;

    constructor() {
        this.id = 0;
        this.name = "";
    }
}