class Div {

    Width;
    Height;
    Styles;
    Content;

    constructor(content = null, styles = null, width = null, height = null) {
        this.Styles = styles;
        this.Content = content;
        this.Width = width;
        this.Height = height;
    }

    print(document) {
        const div = document.createElement(`div`);
        let styleStr = ``;
        if (this.Width != null)
            styleStr += ` width: ${this.Width};`;
        if (this.Height != null)
            styleStr += ` height: ${this.Height};`;
        if (styleStr != ``)
            div.style = styleStr;
        if (this.Style != null)
            div.className = Style.printClassName(this.Styles);
        if (this.Content != null)
            div.innerHtml = this.Content.Print(document);
        return div;
    }
}

export { Div };