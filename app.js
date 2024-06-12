const express=require("express");
const app=express();
const mongoose=require("mongoose");
app.use(express.json());
const cors=require("cors");
app.use(cors());
const bcrypt=require("bcryptjs")

const jwt=require("jsonwebtoken");
const JWT_SECRET="efjdhhfbjbfjkhfjireiodkfjioeur3843934493hjjdsnkjf";
const mongoUrl="mongodb+srv://balaraghakarthi:Balaji@cluster0.8bfum2x.mongodb.net/"

mongoose.connect(mongoUrl,{
    useNewUrlParser:true
})
.then(()=>{
    console.log("connected to database")})
.catch(e=>console.log(e));




require("./userdetails");
require("./employeeu");
const User=mongoose.model("UserInfo");
const Images=mongoose.model("EmployeeInfo");

app.post("/register",async(req,res)=>{
    const{fname,lname,email,phno,password,address,userType}=req.body;
    

    const encryptpass=await bcrypt.hash(password,10);
    try {
        const olduser=await User.findOne({email});

        if(olduser){
           return res.send({error:"User Exists"});
        }
        await User.create({
            fname,
            lname,
            email,
            phno,
            password:encryptpass,
            address,
            userType
        })
        res.send({status:"Ok"});
    } catch (error) {
        res.send({status:"Error"});
    }
})


app.post("/login",async(req,res)=>{
    const {email,password}=req.body;
    const user=await User.findOne({email});
    if(!user)
        {
            return res.json({error:"User Not Found"});
        }
        if(await bcrypt.compare(password,user.password)){
            const token=jwt.sign({email:user.email},JWT_SECRET);
            if(res.status(201)){
                return res.json({status:"ok",data:token});
            }else{
                return res.json({error:"Error"});
            }
        }
        return res.json({status:"error",error:"Invalid Password"});
})
app.post("/userData",async(req,res)=>{
    const {token}=req.body;
    try {
        const user=jwt.verify(token,JWT_SECRET);
        console.log(user)
        const useremail=user.email;
        User.findOne({email:useremail}).then(data=>{
            res.send({status:"ok",data:data});
        })
        .catch((error)=>{
            res.send({status:"error",data:error});
        });
    } catch (error) {
        
    }
});

app.post("/Employeeup",async(req,res)=>{

    const {ename,email,phno,stname,image}=req.body;

    // await User.create({
    //     ename,
    //     email,
    //     phno,
    //     stname,
    // })
    try {

        await Images.create({
            ename,
            email,
            phno,
            stname,
            image,
        })
        res.send({status:"Ok"});
    } catch (error) {
        res.send({status:"Error",data:error});
    }
    // try {
    //     hs.create({imagess:base64});
    //     res.send({status:"ok"})
    // } catch (error) {
    //    res.send({status:"Error",data:error})   
    // }
    
})
// app.get("/get-image",async(req,res)=>{
//     try {
//         await Images.find({}).then(data=>{
//             res.send({status:"ok",data:data})
//         })
//     } catch (error) {
        
//     }
// })
app.get("/getAllUser",async(req,res)=>{
    try {
        
        const allUser=await Images.find({});
       res.send({status:"ok",data:allUser});
    } catch (error) {
        console.log(error);
    }
})
app.listen(5000,()=>{
    console.log("Server started");
});

