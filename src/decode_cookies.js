const {ConsentString} = require('./consent-string.js');
//const consentData = new ConsentString('BOQ7WlgOQ7WlgABABwAAABJOACgACAAQABA');

var cookie_string = process.argv[2];
console.log("The cookie string is:" + cookie_string)

var consentData = new ConsentString(cookie_string);

console.log(consentData)