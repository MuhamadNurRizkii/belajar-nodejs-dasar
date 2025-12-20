import { EventEmitter } from "events";

const emitter = new EventEmitter();

const person = [];

emitter.addListener("hello", (name) => {
  console.log(`Hello ${name}`);
});

emitter.on("hello", (nama) => {
  console.log(`Halo ${nama}`);
});

emitter.addListener("tambah", (a, b) => {
  console.log("Hasil:", a + b);
});

emitter.on("add", (nama, umur, alamat) => {
  person.push({ nama, umur, alamat });
  console.log("Berhasil menambahkan data!");
});

emitter.on("tampil", () => {
  person.forEach((item) => {
    console.log("Nama:", item.nama);
    console.log("Umur:", item.umur);
    console.log("Alamat:", item.alamat);
  });
});

emitter.emit("hello", "rizki");
emitter.emit("tambah", 2, 3);
emitter.emit("add", "andi", 19, "Tangerang");
emitter.emit("tampil");
