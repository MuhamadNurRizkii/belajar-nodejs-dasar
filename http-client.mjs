import http from "http";

const endpoint = "http://localhost:3000";
const request = http.request(
  endpoint,
  {
    method: "POST",
    headers: {
      "content-type": "application/json",
      accept: "application/json",
    },
  },
  (res) => {
    res.addListener("data", (data) => {
      console.log("Recieved: ", data.toString());
    });
  }
);

const body = JSON.stringify({
  firstName: "Andi",
  lastName: "Budi",
});

request.write(body);
request.end();
