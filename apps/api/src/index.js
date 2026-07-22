const express=require('express');
const cors=require('cors');


const app=express();
app.use(cors());

app.get('/',(req,res)=>{
    res.json({
        name: "Naman Jain",
        message: "Hello from Express API"
      });
});

app.listen(3002,()=>{
    console.log("app run at port 3002")
});