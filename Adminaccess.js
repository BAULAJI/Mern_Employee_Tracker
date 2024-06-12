import './Adminc.css';
import React,{Component,useEffect,useState} from 'react';
export default function Adminaccess() {
  const [data,setData]=useState([]);
  const [allImage,setAllImage]=useState([]);
  useEffect(()=>{
       fetch("http://localhost:5000/getAllUser",{
        method:"GET"
       })
       .then((res)=>res.json())
       .then((data)=>{
        console.log(data,"userData");
        setData(data.data);
       })
  },[]);
  function getImage(){
    fetch("http://localhost:5000//getAllUser",{
      method:"GET",
  }).then((res)=>res.json()).then((data)=>{console.log(data)})
    setAllImage(data.data);
  
  }
    return (
  <div className="Tab">
<table border={1} cellSpacing={0} cellPadding={10}>
  <tbody><tr>
      {/* <th>S.no</th> */}
      <th>Employee name</th>
      <th>Employee email</th>
      <th>Employee phonenumber</th>
      <th>State</th>
      <th>Geotag Picture</th>      
    </tr>
    <tr>
    </tr>
  </tbody>
  {data.map(i=>{
    return (
      <tr>
          <td>{i.ename}</td>
          <td>{i.email}</td>
          <td>{i.phno}</td>
          <td>{i.stname}</td>
          <td><img width={300} height={300} src={i.image}/></td>
      </tr>
    )
  })}
  </table>


  </div>
  
    );
  }
  