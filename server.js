const express = require('express');
const app = express();
const port = 3000;

app.use('/', express.static('public'))

const budget = {
    myBudget: [
    {
        title: 'Eat Out',
        budget: 30
    },
    {
        title: 'Rent',
        budget: 450
    },
    {
        title: 'Groceries',
        budget: 90
    }
]}

app.get('/hello',(req,resp)=>{
    resp.send('Hello World!')
});

app.get('/budget',(req,resp)=>{
    resp.json(budget)

});

app.listen(port,()=>{
    console.log(`Example app listening at http://localhost:${port}`);
});