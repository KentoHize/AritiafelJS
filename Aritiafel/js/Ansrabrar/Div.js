import { Element } from "./Element.js";

class Div extends Element {

    constructor(id = null, content = null, styles = [], width = null, height = null) {
        super(`div`, id, content, styles, height);
    }
}

export { Div };