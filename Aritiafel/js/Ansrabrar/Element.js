import { Style } from "./Style.js"

class Element {

    ID;
    #Name;
    Width;
    Height;
    Styles;
    Content;

    constructor(name, id = null, content = null, styles = [], width = null, height = null) {
        this.#Name = name;
        this.ID = id;
        this.Content = content;
        this.Styles = styles;
        this.Width = width;
        this.Height = height;
    }

    getObject(document) {
        const element = document.createElement(this.#Name);
        let styleStr = ``;
        if (this.ID != null && this.ID != ``)
            element.id = this.ID;
        if (this.Width != null)
            styleStr += ` width:${this.Width};`;
        if (this.Height != null)
            styleStr += ` height:${this.Height};`;
        if (styleStr != ``)
            element.style = styleStr;
        if (this.Styles != null && this.Styles.length != 0)
            element.className = Style.printClassName(this.Styles);
        if (this.Content != null)
            element.appendChild(this.Content.getObject(document, doc));
        return element;
    }

}

export { Element };