const person = [];

const addPerson = (nama, umur, kota) => {
  debugger;
  if (!nama || !umur || !kota) {
    console.log("Semua field wajib diisi!");
    return;
  }
  const newData = { nama, umur, kota };

  person.push(newData);
  console.log("Data baru berhasil ditambahkan");
};

const display = () => {
  person.forEach((item, index) => {
    console.log("==================");
    console.log(`Data ke-${index + 1}`);
    console.log("==================");
    console.log("Nama:", item.nama);
    console.log("Umur:", String(item.umur));
    console.log("Kota:", item.kota);
  });
};

addPerson("Budi", 19, "Tangerang");
addPerson("Andi", 22, "Bandung");

display();
