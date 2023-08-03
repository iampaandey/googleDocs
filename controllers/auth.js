const jwt = require("jsonwebtoken");
const KEY = "RaghavPandeyVimalMishraReactDevs";
var user;
const auth =(token)=>{
try {
    const decoded = jwt.verify(token, KEY);
    user = decoded;
    
} catch (err) {
   console.log(err)
}
return user;
}
   module.exports={auth};