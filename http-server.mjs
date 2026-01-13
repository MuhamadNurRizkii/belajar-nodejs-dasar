import http from "http";

const server = http.createServer((req, res) => {
  console.log(req.method);

  console.log(req.url);

  if (req.method === "POST") {
    req.addListener("data", (data) => {
      res.setHeader("Content-Type", "application/json");
      res.write(data);
      res.end();
    });
  } else {
    if (req.url === "/rizki") {
      res.write("Hello Rikzi");
    } else {
      res.write("Hello");
    }

    res.end();
  }
});

server.listen(3000, () => {
  console.log("Server running on port:", 3000);
});
