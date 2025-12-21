import readline from "readline/promises";

const input = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const person = [];

const tambahData = async () => {
  const nama = await input.question("Masukkan Nama: ");
  const umur = await input.question("Masukkan Umur: ");
  const alamat = await input.question("Masukkan Alamat: ");

  if (!nama || !umur || !alamat) {
    console.log("Semua field wajib diisi!");
    return;
  }

  const newData = {
    nama,
    umur: Number(umur),
    alamat,
  };
  person.push(newData);
  console.log("data berhasil ditambahkan!");
};

const tampilData = () => {
  if (person.length === 0) {
    console.log("Data masih kosong!");
    return;
  }

  person.forEach((item, index) => {
    console.log("==============");
    console.log(`Data ke-${index + 1}`);
    console.log("==============");
    console.log(`- Nama: ${item.nama}`);
    console.log(`- Umur: ${item.umur}`);
    console.log(`- Alamat: ${item.alamat}`);
  });
};

const editData = async () => {
  const nama = await input.question("cari nama: ");
  const isNama = person.find((p) => p.nama === nama);

  if (!isNama) {
    console.log("Nama tidak ditemukan");
    return;
  }

  const editNama = await input.question("Masukkan nama baru: ");
  const editUmur = await input.question("Masukkan umur baru: ");
  const editAlamat = await input.question("Masukkan alamat baru: ");

  isNama.nama = editNama || isNama.nama;
  isNama.umur = editUmur || isNama.umur;
  isNama.alamat = editAlamat || isNama.alamat;

  console.log("data berhasil diupdate");
};

let pilih;

do {
  console.log("\n=================");
  console.log(" Selamat Datang");
  console.log("=================");
  console.log("1. Tambah data");
  console.log("2. Lihat data");
  console.log("3. edit data");
  console.log("4. Keluar");
  pilih = await input.question("Pilih: ");

  switch (pilih) {
    case "1":
      await tambahData();
      break;
    case "2":
      tampilData();
      break;
    case "3":
      await editData();
      break;
    case "4":
      console.log("terima kasih...");
      input.close();
      break;
    default:
      console.log("Pilihan tidak valid");
  }
} while (pilih != "4");
