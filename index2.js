const http = require("http");
const mod = require("./modulePractice1") 
const port = 8080;
http.createServer((req,res)=>{
  res.write("<h1>This line is present in index page and below this line we have receive the data form module</h1>");
  res.write(mod.First());
  res.write(mod.Second());
  res.end();
}).listen(port,()=>{
  console.log(`this site is on ${port}`);
  
});