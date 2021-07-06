import { Rule } from "./Rule.js"

class Style {

    Name;
    Rules;

    constructor(name, rules = []) {
        this.Name = name;
        this.Rules = rules;
    }

    addRule(attributeName, value) {
        this.Rules.push(new Rule(attributeName, value));
    }

    removeRule(attributeName) {
        for (let i = 0; i < Rules.length; i++) {
            if (this.Rules[i].Attribute == attributeName) {
                this.Rules.splice(i, 1);
                return;
            }
        }
        console.exception(`${attributeName} not found.`);
    }

    static initiailzie(document) {

    }

  

    static printClassName(styles) {
        let classStr = ``;
        if (styles == null || styles.length == 0)
            return ``;
        for (let i = 0; i < styles.length; i++)
            classStr += styles[i].Name + ` `;
        return classStr.substr(0, classStr.length - 1);
    }

    printAsClassSelector() {
        let cssStr = ``;
        cssStr += `.${this.Name}{`;
        for (let i = 0; i < Rules.length; i++)
            cssStr += `${this.Rules[i].print()}`;
        cssStr += `}`;
        return cssStr;
    }

    
}

export { Style };