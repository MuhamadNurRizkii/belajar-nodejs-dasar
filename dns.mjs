import dns from "dns/promises";

const website = "www.instagram.com";

const ip = await dns.lookup(website);
const cname = await dns.resolveCname(website);

console.log("Alamat IP:", ip.address);
console.log("Family:", ip.family);

console.log(cname);
