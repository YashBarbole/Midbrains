const {Router}= require("express");
const router=Router();
const userMiddleware=require("../middlewares/user");
const { User, Course } = require("../db");


router.post('/signup',(req,res)=>{
const username=req.body.username;
const password=req.body.password;

User.create({
    username,
    password
})

res.json({
    msg:"user created broo"
})
});

router.get('/courses',async (req,res)=>{
    const resp=await Course.find({});

    res.json({
        courses:resp
    })
});

router.post('/courses/:courseId',userMiddleware,async (req,res)=>{
        const courseId= req.params.courseId;
        const username=req.headers.username;

       await User.updateOne({
            username:username
        },{
            "$push":{
                purchasedCourse:courseId
            }
        })

        res.json({
            msg:"purchase doneeee"
        })
});

router.get('/purchasedCourses',userMiddleware,async (req,res)=>{
const user= await User.findOne({
    username:req.headers.username
});

console.log(user.purchasedCourse)
const courses= await Course.find({
    _id:{
        "$in":user.purchasedCourse
    }
})
res.json({
    courses:courses
})
});

module.exports=router;