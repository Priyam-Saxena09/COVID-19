const request = require("request")
const { response } = require("express")

const getdata = (cb) => {
    url="https://api.covid19india.org/state_district_wise.json"
    request({url:url},(error,response) => {
        if(error)
        {
            cb("Unable to Connect the Server",undefined)
        }
        else
        {
            cb(undefined,JSON.parse(response.body))
        }
    })
}


module.exports = getdata;
