import { promises as fs } from 'fs';

export async function getData() {
    try {
        const file = await fs.readFile(process.cwd() + '/public/data.json', 'utf8');
        const data = JSON.parse(file);
        console.log(data)
        return data;

    } catch (erreur) {
      console.error("Erreur :", erreur);
    }
}