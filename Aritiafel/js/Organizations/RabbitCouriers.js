import { Aritiafel } from "../Aritiafel.js"
import { ArTranslator } from "../Devices/ArTranslator.js"

export class RabbitCouriers {

    static Translators = {};
    static CultureInfo = ``;

    static RegisterResourcesFilesFolderAndCultureInfo(resourceFilesFolder, cultureInfo)
    {
        this.Translators = {};
        this.CultureInfo = cultureInfo;
        this.Translators = new ArTranslator(`${resourceFilesFolder}/${this.CultureInfo}.json`);
    }

    static GetMessage(key) {
        return Translators.GetString(key);
    }   
}

if (Aritiafel.Organizations == null)
    Aritiafel.Organizations = {};
Aritiafel.Organizations.RabbitCouriers = RabbitCouriers;
