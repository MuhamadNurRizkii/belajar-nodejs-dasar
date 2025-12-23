import net from "net";

const client = net.createConnection({ port: 3000, host: "localhost" });

client.on("data", (data) => {
  console.log(`Receive data from server: ${data.toString()}`);
});

setInterval(() => {
  client.write("Muhamad Nur Rizki\r\n");
}, 2000);
