let http = require("http"); // Build in module of NodeJS
let url = require("url");
let dt = require("./myFirseModule");
let fs = require("fs"); // file system

http
  .createServer(function (req, res) {
    // res.writeHead(200, { "Content-Type": "text/html" });
    // res.write("Date & Time : " + dt.myDateTime()); // use other module
    // res.write(req.url);
    // let q = url.parse(req.url, true).query; // parse use to analyse string
    // let txt = q.yesr + " " + q.month;
    // res.end(txt);

    fs.readFile("index.html", function (err, data) {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(data);
      return res.end();
    });
  })
  .listen(8000);

fs.appendFile("mynewfile.txt", "Hello new file 1", function (err) {
  if (err) throw err;
  console.log("saved");
});

// fs.open("mynewfile2.txt", "w", function (err, file) {
//   // w in parameter mean for writing
//   if (err) throw err;
//   console.log("saved file 2");
// });

// fs.writeFile("mynewfile3.txt", "update", function (err) {
//   // write file will replace data in file
//   if (err) throw err;
//   console.log("saved file 3");
// });

fs.appendFile("mynewfile3.txt", "add text", function (err) {
  if (err) throw err;
  console.log("append filed");
});
