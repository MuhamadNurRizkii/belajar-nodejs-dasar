import { URL } from "url";

const pzn = new URL("https://www.programmerzamannow.com/belajar?kelas=nodejs");

console.log(pzn.protocol);
console.log(pzn.host);
console.log(pzn.pathname);
console.log(pzn.searchParams);
