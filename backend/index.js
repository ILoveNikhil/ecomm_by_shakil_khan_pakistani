const express = require('express');
const env = require("./config/envConfig")

const app = express()

console.log(env)

app.get("/", (req,res)=>{
    res.json({msg:"Welcome to  Shakil Khan Ecommerce WebApp  server is working -NIKHIL"})
})

const port = env.PORT || 5000;

app.listen(port , () =>{
    console.log(`Your server is running at http://localhost:${port}`)
})