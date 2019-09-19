const request = require('request');
const url = 'https://api.darksky.net/forecast/ab308ccccea72402e89a97eda32c833e/37.8267,-122.4233'
request({ url: url, strictSSL: false,json: true}, (error, response) => {
    // const data = JSON.parse(response.body)
    // console.log(data)
    //console.log(response.body.currently)
    //console.log(response.body.daily.data[0].summary+' It is currently '+response.body.currently.temperature+' degrees out.There is a '+response.body.currently.precipProbability+'% chance of rain');
})

const url1 = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoicmVteWFwMTkiLCJhIjoiY2swcWFtYzNiMDZtZDNjbWxxeWxxZWVscCJ9.gKFjYfPSfsKwkVa0x4qA6w&limit=1'
request({url: url1,strictSSL:false,json: true},(error,response) => {
    //const data = JSON.parse(response.data)
console.log(response.body.features[0].center)
});
