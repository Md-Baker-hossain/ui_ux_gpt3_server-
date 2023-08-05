const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());

const aiwebsite = require('./AiWebsiteData.json'); //

app.get('/',(req,res)=>{
    res.json({message: 'Hello'})
})

app.get('/aiwebsite',(req,res)=>{
    res.json(aiwebsite)
})


app.listen(3030,()=>{
    console.log('server listening on port 3000');
})