const http = require("http");
const express = require("express");
const app = express();
app.get("/", (req, res) =>{
    res.send("Hello from express!");
})
app.get("/about", (req, res) =>{
    res.send("Hello from about");
})
app.get("/contact", (req, res) =>{
    res.send("Hello from contact page!");
})
const server = http.createServer((req, res)=>{
    res.write("Hello form node server");
    res.end();
});
app.listen(3000, ()=>{
    console.log("Server running on http://localhost:4000");
});