
import './Registerc.css';
import React,{Component,useState} from 'react';
// import Adminaccess from "./Adminaccess";
// import React,{Component} from 'react';

// export default class register extends Component {
//     constructor(props){
//       super(props)
//       this.state={
//         fname:"",
//         lname:"",
//         email:"",
//         phno:"",
//         password:"",
//         address:"",
//       };
//       this.handleSubmit=this.handleSubmit.bind(this);
//     }
export default function Register(){
  const [fname,setFname]=useState("");
  const [lname,setLname]=useState("");
  const [email,setEmail]=useState("");
  const [phno,setPhno]=useState("");
  const [password,setPassword]=useState("");
  const [address,setAddress]=useState("");
  const [userType,setUserType]=useState("");
  const [secretKey,setSecretKey]=useState("");
 const handleSubmit=(e)=>{
  if(userType==="Admin"&& secretKey==="Balaji"){
    e.preventDefault();
    alert("Register successful as Admin");
    // window.location.href="./";
    // window.location.href="./";
    window.location.href="./Adminaccess";
   
  }
  if(userType==="Admin"&& secretKey!=="Balaji"){
    e.preventDefault();
    alert("Invalid Admin")
  }
  else
  {
      e.preventDefault();
      // const {fname,lname,email,phno,password,address}=this.state;
      console.log(fname,lname,email,phno,password,address);
      fetch("http://localhost:5000/register",{
        method:"POST",
        crossDomain:true,
        headers:{
          "Content-Type":"application/json",
          Accept:"application/json",
          "Access-Control-Allow-Origin":"*",
        },
        body:JSON.stringify({
          fname,
          lname,
          email,
          phno,
          password,
          address,
          userType
        })
      }).then((res)=>res.json())
      .then((data)=>{
        console.log(data,"userRegister");
        alert("Register successful");
        window.location.href="./";
      });
    }
  }
 return (
  <div className='Regg'>
  {/* <br /> */}
  {/* <br /> */}
  <center><form method="post" onSubmit={handleSubmit}>
      <h1>Register Form</h1>
      <br></br>
      {/* Register As 
      <input 
         type='radio'
         name='UserType'
         value="User"
         onChange={(e)=>setUserType(e.target.value)}
         />User

<input 
         type='radio'
         name='UserType'
         value="Admin"
         onChange={(e)=>setUserType(e.target.value)}
         /> Admin
         <br></br>

{userType==="Admin"?( <div> <input type="text" placeholder="SecretKey" name="SecretKey" max={50} required className="reg"
      //  onChange={e=>this.setState({fname:e.target.value})}
      onChange={(e)=> setSecretKey(e.target.value)}
       /><br /><br /></div>
):null} */}
       
      <input type="text" placeholder="Firstname" name="Firstname" max={50} required className="reg"
      //  onChange={e=>this.setState({fname:e.target.value})}
      onChange={(e)=> setFname(e.target.value)}
       /><br /><br />
      <input type="text" placeholder="Lastname" name="Lastname" required className="reg" 
      //  onChange={e=>this.setState({lname:e.target.value})}
      onChange={(e)=> setLname(e.target.value)}
        /><br /><br />
      <input type="email" placeholder="Email" name="Email" required className="reg"
        // onChange={e=>this.setState({email:e.target.value})}
        onChange={(e)=> setEmail(e.target.value)}
      /><br /><br />
      <input type="text" placeholder="Phonenumber" name="Phonenumber" required className="reg" 
      //  onChange={e=>this.setState({phno:e.target.value})}
      onChange={(e)=> setPhno(e.target.value)}
      /><br /><br />
      <input type="password" placeholder="New Password" name="Password" required className="reg" 
      //  onChange={e=>this.setState({password:e.target.value})}
      onChange={(e)=> setPassword(e.target.value)}
      /><br /><br />
      <input type="text" placeholder="Address" name="Address" required className="reg" 
      //  onChange={e=>this.setState({address:e.target.value})}
      onChange={(e)=> setAddress(e.target.value)}
      /><br /><br />
      <center><input type="submit" defaultValue="submit" name="submit" /></center>
    </form></center>
</div>

    );
  }

  