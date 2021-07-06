class Doc {

    Styles;
    Elements;

    constructor(elements = {}, styles = []) {
        this.Elements = elements;
        this.Styles = styles;
    }

    getObject(document) {
        let styleSheet = document.getElementsByTagName(`style`);
        if (styleSheet.length == 0) {
            styleSheet = document.createElement(`style`);
            styleSheet.type = `text/css`;
            document.getElementsByTagName(`head`)[0].appendChild(styleSheet);
            for (let i = 0; i < this.Styles.length; i++)
                document.styleSheets[0].insertRule(Styles[i].printAsClassSelector(), 0);
        }        
    }
}

export { Doc };