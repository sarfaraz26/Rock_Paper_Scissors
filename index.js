const express = require('express');
const PORT = 1500

const app = express();

app.use(express.static('public'))
app.set('view engine','ejs');

app.get('/',(req,res)=>{
    res.render('main');
})

app.get('/game',(req,res)=>{
    res.render('index');
})

app.listen(PORT,()=>{
    console.log(`Listening to PORT ${PORT}`);
})
