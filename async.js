function samplePromise() {
  return Promise.resolve("Rizki");
}

function sayHello(name) {
  return new Promise((resolve, reject) => {
    resolve("Hello " + name);
  });
}

const name = await samplePromise();
console.info(name);

sayHello("Rizki").then((res) => console.log(res));
