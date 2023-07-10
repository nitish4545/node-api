const express = require("express");
const app = express();

const PORT = process.env.PORT || 8000;

app.get("/api/user",(req,res)=>{


        res.json({name:"Nitish cha",serviceInstance:1});
 })

app.listen(PORT,() => console.log(`Listening on port ${PORT}`));