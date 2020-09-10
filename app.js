const express = require("express");
const port = process.env.PORT;
const app = express();
const getdata = require("./function")
app.use(express.static("static"))
app.set("view engine","hbs")
app.set("views","public")

app.get("",(req,res) => {
    res.render("index")
})

app.get("/data",(req,res) => {
    getdata((error,data) => {
        if(!error)
        {
            res.send({
                "data":data
            })
        }
    })
})

app.listen(port,() => {
    console.log("Server is Running on Port " + port)
})