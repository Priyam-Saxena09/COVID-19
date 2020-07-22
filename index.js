const request = require("request");
const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
app.use(express.static("images"));
const path = require("path");
const url = "https://api.covid19india.org/state_district_wise.json";
const url1 = "https://coronavirus-19-api.herokuapp.com/countries/india";
var err = "";
var active = "";
var confirmed = "";
var recover = "";
var death = "";
const tempath = path.join(__dirname,"../COVID-19/template");
app.set("view engine","hbs");
app.set("views",tempath);
request({url:url1},(error,response) => {
    if(error) 
    {
         err = error;
    }
    else
    {
        const data = JSON.parse(response.body);
        active = data.active;
        confirmed = data.cases;
        recover = data.recovered;
        death = data.deaths;
    }
})

app.get("",(req,res) => {
     res.render('covid',{
          Act:active,
          Con:confirmed,
          Rec:recover,
          Dea:death,
          Err:err
    })
})


app.listen(port,() => {
    console.log("Server is on Port " + port);
})

/*request({url:url},(error,response) => {
    if(error)
    {
        console.log("There is a problem in network connection");
    }
    else
    {
        const state = "Uttar Pradesh";
       const data = JSON.parse(response.body);
       console.log(data[state].districtData.Amethi);
       console.log(Object.keys(data[state].districtData).length);
    }
})*/