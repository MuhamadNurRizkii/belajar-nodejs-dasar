import fs from "fs/promises";

const buffer = await fs.readFile("file-system.mjs");
const file = await fs.readFile("text.txt");

await fs.writeFile("text.txt", "Saya sedang belajar library file system");

await fs.appendFile("text.txt", "Hello Nodejs", "utf-8");
