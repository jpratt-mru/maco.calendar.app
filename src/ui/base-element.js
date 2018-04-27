export class BaseElement {
    constructor() {
        console.log("base element");
        this.element = null;
    }

    createElement() {
        let s = this.getElementString();
    }

    getElementString() {
        throw "Please override getElementString() from BaseElement";
    }
}