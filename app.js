var express = require("express");
var bodyParser = require("body-parser");
var app = express()
var cors = require("cors")
//middleware
app.use(bodyParser.json());
app.use(cors());
app.use(express.static("public"));
app.use(bodyParser.urlencoded(
    {extended:true}
))
var InitiateMongoServer = require("./db")
InitiateMongoServer();
app.set("view engine","ejs");


app.use("/add",require("./routes/add"))
app.use("/search",require("./routes/search"))
app.use("/delete",require("./routes/delete"))
app.use("/update",require("./routes/update"))
app.use("/check",require("./routes/checkdept"))
app.get( "/" ,(req,res) => {
        
    res.redirect('home.html')
})
app.listen(5000)
console.log("port is active on 5000")