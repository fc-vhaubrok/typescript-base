import { print } from "./common/printer";
import fs from "fs";
fs.rmSync("../target", {recursive: true, force: true});
fs.mkdirSync("../target");

const providedData = {
    test: 'data',
    lore: 'ipsum',
    data: {
        lore: 'ipsums',
        ipsum: 'lore',
        'test': 'test'

    }
}
const text = JSON.stringify(providedData, null, 2);

print(text, "neueDatei");

const targetFilenames: string[] = fs.readdirSync("../target");

console.log('PDF generated: ', targetFilenames);
