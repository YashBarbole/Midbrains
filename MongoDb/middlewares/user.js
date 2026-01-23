const {User}= require('../db');

function userMiddleware(req,res,next){

    const username=req.headers.username;
    const password=req.headers.password;
    User.findOne({
            username:username,
            password:password
        })
        .then(function(value){
            if(value){
                return next();
            }
            else{
                res.status(403).json({
                    msg:"user nhi he bhai bana le"
                })
            }
        })

}

module.exports = userMiddleware;