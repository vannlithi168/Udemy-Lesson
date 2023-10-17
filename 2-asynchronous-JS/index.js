const fs = require("fs");

fs.readFile(`${__dirname}/dog.text`, (err, data) => {
  console.log(`Breed: ${data}`);
});
