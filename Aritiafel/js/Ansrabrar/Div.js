import { Style } from "./Style.js"

class Div {

    Width;
    Height;
    Styles;
    Content;

    constructor(content = null, styles = [], width = null, height = null) {
        this.Styles = styles;
        this.Content = content;
        this.Width = width;
        this.Height = height;
    }

    getObject(document) {
        const div = document.createElement(`div`);
        let styleStr = ``;
        if (this.Width != null)
            styleStr += ` width:${this.Width};`;
        if (this.Height != null)
            styleStr += ` height:${this.Height};`;
        if (styleStr != ``)
            div.style = styleStr;
        if (this.Styles != null && this.Styles.length != 0)
            div.className = Style.printClassName(this.Styles);
        if (this.Content != null)
            div.appendChild(this.Content.getObject(document, doc));
        return div;
    }
}

export { Div };