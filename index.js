const express = require("express");
// const bollywood=require('./router/data')
const cors= require("cors")
const app = express();

const route = require('./router/Router')
const Bollywood = require('./router/data')
app.use(cors({
    origin:'*'
}))

app.use(route)



app.get('/Bollywood', (req, res) => {
    res.json(Bollywood);
  });



app.listen(8000, () => {

    console.log("server is running")
})