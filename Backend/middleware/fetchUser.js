const jwt = require('jsonwebtoken');
const JET_SECRET = 'Password@!##';
const fetchuser = (req, res, next)=>{
    //Get the user from the jwt token  and add id to req Object
    const token = req.header('auth-token');
    if(!token){
        res.status(401).send({Error: "please authenication using a vcaild token "});

    }
    try{
        const data = jwt.verify(token,JET_SECRET );
         req.user = data.users;
        next();
    }catch(error){
        res.status(401).send({Error: "please authenication using a vcaild token "});

    }
  

}

module.exports = fetchuser;