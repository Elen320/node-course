const http = require("http");
const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.write("Welcome to our home page");
    res.end();
  }
  if (req.url === "/about") {
    res.write("Welcome to our about page");
    res.end();
  }
  res.write(`<h1>OOPS!</h1>`);
  res.end();
});
server.listen(5000);

const _ = require('lodash')
const items = [1,[2],[[3,4]]]
console.log(_.flattenDeep(items))
