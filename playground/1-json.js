
const fs = require('fs');
const dataBuffer = fs.readFileSync('1-json.json');
const dataJson = dataBuffer.toString();
const data = JSON.parse(dataJson);
data.name = 'Remya';
data.age = 77;
const changedJson = JSON.stringify(data);
fs.writeFileSync('1-json.json',changedJson);
