// import { upload } from "@testing-library/user-event/dist/upload";
import { Component } from "react";
// import React,{useState} from 'react';
// import useImageUpload from './useImageUpload';
export default class Employeeup extends Component {
  constructor(props){
    super(props)
    this.state={
      ename:"",
      email:"",
      phno:"",
      stname:"",
      image:"",
      
    };
    this.handleSubmit=this.handleSubmit.bind(this);
    this.convertToBase64 = this.convertToBase64.bind(this);
  }
  handleSubmit(e){
    
    e.preventDefault();
    const {ename,email,phno,stname,image}=this.state;
    
    console.log(ename,email,phno,stname,image);
    fetch("http://localhost:5000/Employeeup",{
      method:"POST",
      crossDomain:true,
      headers:{
        "Content-Type":"application/json",
        Accept:"application/json",
        "Access-Control-Allow-Origin":"*",
      },
      body:JSON.stringify({
        ename,
        email,
        phno,
        stname,
        image
      })
    }).then((res)=>res.json())
    .then((data)=>{
      console.log(data);  
      alert("Uploaded Successfully");
      window.location.href="./home";
      
    });
  }
  convertToBase64(e){
      console.log(e);
      var reader=new FileReader();
      reader.readAsDataURL(e.target.files[0]);
      reader.onload=()=>{
        this.setState({ image: reader.result });
      
      };
      reader.onerror=error=>{
        console.log("Error: ",error);
      }
    }
  // componentDidMount(){
  //   fetch("http://localhost:5000/userData",{
  //     method:"POST",
  //     crossDomain:true,
  //     headers:{
  //       "Content-Type":"application/json",
  //       Accept:"application/json",
  //       "Access-Control-Allow-Origin":"*",
  //     },
  //     body:JSON.stringify({
  //      token:window.localStorage.getItem("token"),
  //     }),
  //   }).then((res)=>res.json())
  //   .then((data)=>{
  //     console.log(data,"userData");
  //   });
  // }
  getImage(){
    fetch("http://localhost:5000//getAllUser",{
      method:"GET",
  }).then((res)=>res.json()).then((data)=>console.log(data))
  
  }
  
    render()
    {  
      
      // function convertToBase64(e){
      //   console.log(e);
      //   var reader=new FileReader();
      //   reader.readAsDataURL(e.target.files[0]);
      //   reader.onload=()=>{
      //     this.setState({ image: reader.result });
      //   };
      //   reader.onerror=error=>{
      //     console.log("Error: ",error);
      //   }
      // }
      // function uploadImage(){
      //   fetch("http://localhost:5000/upload",{
      //     method:"POST",
      //     crossDomain:true,
      //     headers:{
      //       "Content-Type":"application/json",
      //       Accept:"application/json",
      //       "Access-Control-Allow-Origin":"*",
      //     },
      //     body:JSON.stringify({
      //       // ename,
      //       // email,
      //       // phno,
      //       // stname,
      //      base64:imagess,
      //     })
      //   }).then((res)=>res.json())
      //   .then((data)=>{
      //     console.log(data,"employeedetails");
      //   });
      // }
      // function ImageUploadComponent() {
      //   const { image, handleImageChange } = useImageUpload();
      
      //   return (
      //     <div>
      //       <input type="file" onChange={handleImageChange} />
      //       {image && <p>Image selected: {image.name}</p>}
      //     </div>
      //   );
      // }
      return (
  <div className="Form">
    <br />
    <br />
    <center><form method="post" encType="multipart/form-data"  onSubmit={this.handleSubmit}>
    <h1>Employee form</h1>
    <br/>
    <br/>
    <input type="text" placeholder="Employee name" name="empname" max={50} required className="reg" 
     onChange={e=>this.setState({ename:e.target.value})} /><br /><br />
    <input type="email" placeholder="Email" name="Email" required className="reg"   onChange={e=>this.setState({email:e.target.value}) }/><br /><br />
    <input type="text" placeholder="Phonenumber" name="Phonenumber" required className="reg" onChange={e=>this.setState({phno:e.target.value}) }/><br /><br />
    <input type="text" placeholder="State name" name="Statename" required className="reg" onChange={e=>this.setState({stname:e.target.value}) }/><br /><br />
    <h4>Upload your Geotag photo below and it should be less than 1MB</h4> <br/>
    <input type="file" placeholder="Upload" name="image" required className="reg" style={{backgroundColor:"white",width:560}} onChange={this.convertToBase64}  /><br /><br />
    {/* <button onClick={this.handleSubmit}>Upload</button> */}
    <center><input type="submit" defaultValue="submit" name="submit"  /></center>
  </form></center>
  {/* {image===""||image==null?"":<img width={100} height={100} src={image} alt="Im"/>} */}

  
  </div>
  
    );
    
  }
}
  