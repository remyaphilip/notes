let fs1 = require('fs');
let x = () => {return fs1.appendFileSync('notes.txt','append');}
exports.module = x;