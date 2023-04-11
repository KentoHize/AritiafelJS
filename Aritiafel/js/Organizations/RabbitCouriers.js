import { Aritiafel } from "../Aritiafel.js"
import { ArTranslator } from "../Devices/ArTranslator.js"

export class RabbitCouriers {

    static #resourceFileFolder
    static Translators = [];
    static DefaultCultureInfo = ``;

    static RegisterResourcesFilesFolderAndCultureInfo(resourceFilesFolder, cultureInfo)
    {
        this.Translators = [];
        this.DefaultCultureInfo = cultureInfo;
        this.#resourceFileFolder = resourceFilesFolder;
        this.Translators[this.DefaultCultureInfo] = new ArTranslator(`${resourceFilesFolder}/${this.DefaultCultureInfo}.json`);
    }

    static RegisterNewCultureInfo(cultureInfo) {
        this.Translators[cultureInfo] = new ArTranslator(`${resourceFilesFolder}/${cultureInfo}.json`);
    }

    //Check
    static UnregisterAll() {
        delete this.Translators;
        this.Translators = [];
    }

    static GetMessage(key, cultureInfo = null) {
        if (cultureInfo)
            return Translators[cultureInfo].GetString(key);
        else
            return Translators[this.CultureInfo].GetString(key);
    }   
}

if (Aritiafel.Organizations == null)
    Aritiafel.Organizations = {};
Aritiafel.Organizations.RabbitCouriers = RabbitCouriers;
