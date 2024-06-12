const mongoose=require("mongoose");
const EmployeeInfoSchema=new mongoose.Schema(
    {
       ename:String,
       email:String,
       phno:String,
       stname:String,
       image:String
    },
    {
        collection:"EmployeeInfo",
    }
);
mongoose.model("EmployeeInfo",EmployeeInfoSchema);