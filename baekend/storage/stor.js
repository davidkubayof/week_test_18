import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const dataDir = path.join(__dirname, '../data');

async function makeSureFileExists(fileName) {
  const filePath = path.join(dataDir, fileName);
  await fs.mkdir(dataDir, { recursive: true });
  try {
    await fs.readFile(filePath, 'utf-8');
  } catch (e) {
    await fs.writeFile(filePath, '[]', 'utf-8');
  }
}

export async function readAll(fileName) {
  await makeSureFileExists(fileName);
  const filePath = path.join(dataDir, fileName);
  const text = await fs.readFile(filePath, 'utf-8');
  return JSON.parse(text);
}

export async function writeAll(list, fileName) {
  await makeSureFileExists(fileName);
  const filePath = path.join(dataDir, fileName);
  await fs.writeFile(filePath, JSON.stringify(list, null, 2), 'utf-8');
}