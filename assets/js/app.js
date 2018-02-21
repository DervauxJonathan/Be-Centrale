import "../scss/app.scss";
var Email = require('email').Email
var myMsg = new Email(
{ from: "me@example.com"
, to:   "delphine.braive@gmail.com"
, subject: "Knock knock..."
, body: "Who's there?"
})
// if callback is provided, errors will be passed into it
// else errors will be thrown
myMsg.send(function(err){
console.log(err)
})
