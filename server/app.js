const express = require("express");
const app = express();
const axios = require("axios");
const { default: mongoose } = require("mongoose");

require('dotenv').config({path:"./config.env"})


app.get("/",async (req,res)=>{
   const response = await axios("https://api.wazirx.com/api/v2/tickers");



const data =await response.data;
  
   let i = 1;
   let arr = [];
    for (const [key, value] of Object.entries(data)) {
       if(i<=10){ 
       arr.push({[key]:value});
        i++;
       }   
}


res.send(arr);
})


app.listen(process.env.PORT,()=>{
    console.log(`server is running on ${process.env.PORT}`);
});