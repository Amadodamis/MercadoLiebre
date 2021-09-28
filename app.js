const express = require('express');
const app = express();
const path=require("path");
app.use(express.static("public"));

app.listen(process.env.PORT || 3000,()=>{
    console.log("Servidor online");
    console.log(">>>>>>>>>>>>>>>>>>>>>>>","http://localhost:3000/", "<<<<<<<<<<<<<<<<<<<<<<<<");
    console.log(">>>>>>>>>>>>>>>>>>>>>>>","http://192.168.0.145:3000", "<<<<<<<<<<<<<<<<<<<<<<<<");
});

app.get("/", (req, res)=>{
    const fileToSend=path.join(__dirname,"/views/index.html")
    res.sendFile(fileToSend)
})

app.get("/register", (req, res)=>{
    const fileToSend=path.join(__dirname,"/views/register.html")
    res.sendFile(fileToSend)
})

app.get("/login", (req, res)=>{
    const fileToSend=path.join(__dirname,"/views/login.html")
    res.sendFile(fileToSend)
})


app.post("/register",(req,res)=>{
    res.redirect("/")
})

app.post("/login",(req,res)=>{
    res.redirect("/")
})
