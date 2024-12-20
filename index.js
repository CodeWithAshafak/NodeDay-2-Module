const http = require("http");
const myclg = require("./cybrom");
http.createServer((req,res)=>{
  res.write("<h1>Welcome To Bhopal</h1>");
  res.write(myclg.Mycollege());
  res.end()
}).listen(8000);