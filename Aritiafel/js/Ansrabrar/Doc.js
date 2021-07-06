import { Style } from "./Style.js"

class Doc {

    Elements;
    Styles;

    constructor(elements = [], styles = []) {
        this.Elements = elements;
        this.Styles = styles;
    }

    createStyle(name) {
        var style = new Style(name);
        this.Styles.push(style);
        return style;
    }

    removeStyle(name) {
        this.Styles = this.Styles.filter(item => item.Name !== name);
    }

    printTo(document, root = null) {
        if (this.Styles != null && this.Styles.length != 0) {
            let styleSheet = document.getElementsByTagName(`style`);
            if (styleSheet.length == 0) {
                styleSheet = document.createElement(`style`);
                styleSheet.type = `text/css`;
                document.getElementsByTagName(`head`)[0].appendChild(styleSheet);
            }
            for (let i = 0; i < this.Styles.length; i++)
                document.styleSheets[0].insertRule(this.Styles[i].printAsClassSelector(), 0);
        }
        if (this.Elements.length != 0) {
            if (root == null)
                root = document.getElementsByTagName(`body`)[0];
            for (let i = 0; i < this.Elements.length; i++)
                root.appendChild(this.Elements[i].getObject(document));
        }   
    }
}

export { Doc };