import os from "os";

console.info(os.platform()); // menampilkan os yang digunakan (win32)
console.info(os.arch()); // menampilkan arsitektur cpu tempat dimana nodejs di compile
console.table(os.cpus()); // menampilkan informasi cpu
console.info(os.totalmem()); // menampilkan total jumlah memory
console.info(os.freemem()); // menampilkan memory yang bisa dipakai/tersedia
console.info(os.homedir()); // menampilkan direktori user saat ini
console.info(os.hostname()); // menampilkan nama host sebagai pengguna sistem operasi
console.table(os.networkInterfaces()); // menampilkan object yang berisi interfaces jaringan
console.info(os.uptime()); // menampilkan waktu aktif os dalam satuan detik
