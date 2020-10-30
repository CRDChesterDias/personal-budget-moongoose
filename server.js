const express = require('express');
const mongoose = require("mongoose");
const model = require("./models/budget_model");
const cors = require('cors');

const app = express();
const port = 3000;


app.use('/', express.static('public'))
app.use(cors());


let url = 'mongodb://localhost:27017/mongodb_budget_data';

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
        .then(()=>{
            console.log("Connected to the database");
        })
        .catch((connectionError)=>{
            console.log(connectionError)
        });

app.get('/hello',(req,resp)=>{
    resp.send('Hello World!')
});

app.get('/budget',async (req,resp)=>{
    try{
        const budget = await model.find();
        resp.send(budget);
    }
    catch(exception){
        console.log(exception);
    }

});

app.post('/insertData', async (req, res) => {
    try{
        const data = new model({title: req.query.title, budget: req.query.budget, color: req.query.color}); 
        const result = await data.save();
        res.send(result);
    }
    catch(exception){
        console.log(exception);
    }
});

app.listen(port,()=>{
    console.log(`Example app listening at http://localhost:${port}`);
});