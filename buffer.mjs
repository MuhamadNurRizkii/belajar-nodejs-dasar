import { Buffer } from "node:buffer";

const data = {
  nama: "Andi",
  umur: 19,
  alamat: "Tangerang",
};

const buffer = Buffer.from("Andi", "utf-8");

console.log(buffer);
console.log(buffer.toString());
console.log(buffer.toString("hex"));
console.log(buffer.toString("base64"));

const bufferBase64 = Buffer.from("TXVoYW1hZCBOdXIgUml6a2k=", "base64");

console.log(bufferBase64.toString("utf-8"));

const jsonBuffer = Buffer.from(JSON.stringify(data), "utf-8");

console.log(jsonBuffer);
const res = jsonBuffer.toString();
console.log(JSON.parse(res));
