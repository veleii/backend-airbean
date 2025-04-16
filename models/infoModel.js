import fs from "fs/promises";
import Datastore from "nedb-promises";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const jsonFilePath = path.join(__dirname, "..", "db", "companyInfo.json");
const companyDb = new Datastore({
  filename: path.join(__dirname, "..", "db", "companyInfo.db"),
  autoload: true,
});

export const seedCompanyInfo = async () => {
  const existing = await companyDb.find({});
  if (existing.length === 0) {
    const data = await fs.readFile(path.join(jsonFilePath), "utf8");
    const companyInfo = JSON.parse(data);

    await companyDb.insert(companyInfo);
    console.log("Company info seedad.");
  }
};

//Hämta företagsinfo
export const fetchCompanyInfo = async () => {
  const info = await companyDb.findOne({});
  return info;
};
