const{Router}= require("express");
const adminMiddleware= require("../middlewares/admin");
const { Admin, Course } = require("../db");
const router=Router();

router.post('/signup',async (req,res)=>{
    const username= req.body.username;
    const password= req.body.password;

    await Admin.create({
        username:username,
        password:password
    });

    res.json({
        msg:"admin created brooo"
    });
});

router.post('/courses',adminMiddleware, async (req,res)=>{
        const title= req.body.title;
        const desc=req.body.desc;
        const imageLink= req.body.imageLink;
        const price= req.body.price;

const newCourse= await Course.create({
            title,
            desc,
            imageLink,
            price
        })
        console.log(newCourse);
        res.json({
            msg:"course created broo",courseId: newCourse._id
        })
});

router.get('/courses',adminMiddleware,(req,res)=>{
        Course.find({}).then(function(response){
                res.json({
                    courses:response
                })
        })
});
module.exports=router;