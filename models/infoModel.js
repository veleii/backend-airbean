import fs from 'fs/promises'
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const jsonFilePath = path.join(__dirname, '..', 'db', 'companyInfo.json')

//Hämta företagsinfo
export const fetchCompanyInfo = async () => {
    const data = await fs.readFile(jsonFilePath, 'utf8');
    return JSON.parse(data)
};
