import fs, { read } from "fs";

const writer = fs.createWriteStream("target.log");

writer.write("Muhamad ");
writer.write("Nur ");
writer.write("Rizki");
writer.end();

const reader = fs.createReadStream("target.log");

reader.on("data", (data) => {
  console.log(data.toString());
});
