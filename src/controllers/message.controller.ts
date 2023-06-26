import * as fs from 'fs';
import {randomUUID} from 'crypto';

class MessageController {

    public folderPath: string = 'message';

    constructor() {

    }

    /**
     * Function to create message file
     */
    public create(filePath) {

        const initialData = [];

        try {
            fs.writeFileSync(filePath, JSON.stringify(initialData), 'utf8');
        } catch (err) {
            throw err;
        }

        return filePath;
    }

    /**
     * Function to create uuid
     */
    public createUUIDFile() {

        if (!fs.existsSync(this.folderPath)) {
            try {
                fs.mkdirSync(this.folderPath);
            } catch (err) {
                console.error("Erreur lors de la création du dossier :", err);
                throw err;
            }
        }

        const fileName = randomUUID();

        return `${this.folderPath}/${fileName}.json`;
    }


    /**
     *
     * @param message
     * @param filePath
     */
    public add(message: string, filePath: string) {
        fs.readFile(filePath, 'utf8', function (err, data) {
            if (err) throw err;

            let messages = JSON.parse(data);
            messages.push(message);

            fs.writeFile('message.json', JSON.stringify(messages), 'utf8', function (err) {
                if (err) throw err;
                console.log('Le message a été ajouté avec succès !');
            });
        });
    }
}

export default new MessageController();
