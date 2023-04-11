import { Aritiafel } from "../Aritiafel.js"

export class ArTranslator {
    #resourceFile;    
    constructor(resourceFile) {
        import(resourceFile, { assert: { type: `json` } }).then(m => {
            this.#resourceFile = m.default;
        });
    }

    GetString(key) {
        return this.#resourceFile.find(m => m.Key == key).Value;
    }
}

if (Aritiafel.Devices == null)
    Aritiafel.Devices = {};
Aritiafel.Devices.ArTranslator = ArTranslator;
