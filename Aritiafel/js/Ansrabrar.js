import { Aritiafel } from "./Aritiafel.js"
import { Div } from "./Ansrabrar/Div.js"
import { Style } from "./Ansrabrar/Style.js"
import { Rule } from "./Ansrabrar/Rule.js"
import { Doc } from "./Ansrabrar/Doc.js"

class Ansrabrar { }

Aritiafel.Ansrabrar = Ansrabrar;
Aritiafel.Ansrabrar.Div = Div;
Aritiafel.Ansrabrar.Style = Style;
Aritiafel.Ansrabrar.Rule = Rule;
Aritiafel.Ansrabrar.Doc = Doc;

export { Aritiafel, Ansrabrar, Doc, Div, Style, Rule };

//Usage Example
/*
 import { Doc, Div } from "./js/Ansrabrar.js";
        let doc = new Doc();        

        let style1 = doc.createStyle(`testS`);
        style1.addRule(`background-color`, `red`);
        style1.addRule(`width`, `500px`);
        style1.addRule(`height`, `300px`);
        style1.addRule(`border-style`, `solid`);
        style1.addRule(`border-width`, `20px`);

        let d = new Div();
        d.Styles.push(style1);        
        d.ID = `ab`;
        doc.Content = d;        

        document.addEventListener("DOMContentLoaded", function (event) {
            doc.printTo(document);            
        });
*/
