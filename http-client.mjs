import https from "https";

const endpoint = "https://url";
const request = https.request(
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
