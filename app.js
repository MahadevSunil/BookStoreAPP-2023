const express = require("express");
const mongoose = require("mongoose");
const router = require("./routes/book-routes");
const cors = require('cors');
const path = require("path");

const app = express();

//Middlewares
app.use(express.json());
app.use(cors());
app.use("/books",router);

//static files
app.use(express.static(path.join(__dirname, './frontend/build')));

app.get('*', function(req,res){
    res.sendFile(path.join(__dirname, './client/build/index.html'));
});

mongoose.connect("mongodb+srv://admin:3o0raGZhtz53FkdL@cluster0.neyngxo.mongodb.net/bookstoreapp?retryWrites=true&w=majority"
).then(()=>console.log("Connected to Database"))
.then(()=>{
    app.listen(5000)
}).catch((err)=>console.log(err));







//3o0raGZhtz53FkdL