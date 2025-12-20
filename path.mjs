import path from "path";

const file = "/fullstack/client/src/app.jsx";
const file2 = "/belajar-coding";
const file3 = "data.json";

console.info(path.dirname(file)); // mengembalikan nama direktori file
console.info(path.basename(file)); // mengembalikkan bagian terakhir dari sebuah path (main.jsx)
console.info(path.extname(file3)); // mengembalikan ekstensi file (.html, .js, .json)

console.info(path.format({ dir: file2, base: "index.html" }));
