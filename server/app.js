const express = require("express");
const app = express();
const axios = require("axios");
const cors = require("cors");


require('dotenv').config({path:"./.env"})
const mongoose = require('mongoose');
app.use(cors());

mongoose.set("strictQuery", false);

mongoose.connect(process.env.URL,{
    useNewUrlParser:true,
    
    useUnifiedTopology: true,
    
    }).then(()=>{
        console.log('connection successful')
    }).catch((err)=>{
        console.log(err);
    });


    const tickerSchema = new mongoose.Schema({
        name : {
        type : String,
        required : true
        },
        last : {
        type : String,
        required : true
        },
        buy : {
        type : String,
        required : true
        } ,
        sell : {
        type : String,
        required : true
        },
        volume : {
        type : String,
        required : true
        },
        base_unit : {
        type : String,
        required : true
        }
        
    })
    
    const Ticker = mongoose.model("TICKER",tickerSchema);
    


app.get("/",async (req,res)=>{
  
  
const tickerData =await Ticker.find({});


const response = await axios("https://api.wazirx.com/api/v2/tickers");
        const data =await response.data;

    if(tickerData.length === 0 ){
        console.log("no data!!!");
        
        let i = 1;
        let arr = [];
         for (const [key,value] of Object.entries(data)) {
            if(i<=10){ 
            arr.push(value);
           
             i++;
            }   
       }
    
       arr.map( (ele)=>{
       const inputData =  async ()=>{
            const {name,last,buy,sell,volume,base_unit} = ele;
        
            const ticker = new Ticker({name,last,buy,sell,volume,base_unit});
           
           await ticker.save();
        }
    inputData();
      
       })
       
     res.json({message:"you have successfully saved 10 record to your database!"});
    }
    else{
       res.json({error:"you have already added the data into database!"})
    }
   
})


app.get("/ticker",async (req,res)=>{
const response = await Ticker.find();

res.send(response);

})


app.listen(process.env.PORT,()=>{
    console.log(`server is running on ${process.env.PORT}`);
});