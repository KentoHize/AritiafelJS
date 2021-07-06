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
        if (this.Styles != null && this.Styles.length != 0)
            element.className = Style.printClassName(this.Styles);

        //確認有沒有需要調整的Width和Height
        //let bw = Style.getRuleByNameFromStyles(this.Styles, `border-width`);        
        //if (bw != null) {
        //    let w = Style.getRuleByNameFromStyles(this.Styles, `width`);
        //    let h = Style.getRuleByNameFromStyles(this.Styles, `height`);

        //    //To Do
        //    //px em等單位處理
        //    //border-left-width等特殊處理
        //    if (bw.Value.includes(`px`)) {
        //        if (this.Width == null)
        //            this.Width = w.Value.split(`px`)[0] - bw.Value.split(`px`)[0] * 2 + `px`;
        //        if (this.Height == null)
        //            this.Height = h.Value.split(`px`)[0] - bw.Value.split(`px`)[0] * 2 + `px`;
        //    }
        //}
        if (this.Width != null)
            styleStr += ` width:${this.Width};`;
        if (this.Height != null)
            styleStr += ` height:${this.Height};`;
        if (styleStr != ``)
            element.style = styleStr;
        if (this.Content != null)
            element.appendChild(this.Content.getObject(document, doc));
        return element;
    }

}

export { Element };