const Connection = require('./db/config.js');
const express = require('express');
const cors = require('cors')
const app = express();
const route = require('./routes/route')
const auth = require('./routes/auth')
app.use(express.json());
app.use(cors());
Connection();
const PORT = 7000;
app.listen(PORT, () => console.log(`Your server is running successfully on PORT ${PORT}`));
//! --------------------------- API------------------------------
app.get("/demo", (req, res)=>{
    res.send("WorK it");
})

app.use(express.json(
    {extended:true}
));
app.use(express.urlencoded({
    extended:true
}));
app.use('/', route);
app.use('/api',auth);