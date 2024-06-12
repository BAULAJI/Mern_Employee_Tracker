import Home from "./Home";

import Login1 from "./ELogin/Login1";
import Register from "./register";
import Forgetpass from "./Forgetpass";
import Updatepass from "./Updatepass";
import Employeeup from "./Employeeup";
import Adminaccess from "./Adminaccess";
import ImageUpload from "./imageUpload";
import {Routes,Route } from "react-router-dom";

export function App() {
  return (


<Routes>
    <Route index='/home' element={<Home/>}/>
    <Route path='/Login1' element={<Login1/>}/>
    <Route path='/Login1/Register' element={<Register/>}/>
    <Route path='/Login1/Forgetpass' element={<Forgetpass/>}/>
    <Route path='/Login1/Forgetpass/Updatepass' element={<Updatepass/>}/>
    <Route path='/Employeeup' element={<Employeeup/>}/>
    <Route path='/Adminaccess' element={<Adminaccess/>}/>
    <Route path='/ImageUpload' element={<ImageUpload/>}/>
    <Route path='/Login1/Adminaccess' element={<Adminaccess/>}/>
    
    <Route path='/home/Adminaccess' element={<Adminaccess/>}/>
    <Route path='/home/Login1' element={<Login1/>}/>
    <Route path='/home' element={<Home/>}/>
    <Route path='/Login1/home' element={<Home/>}/>
    <Route path='/Login1/Employeeup' element={<Employeeup/>}/>
  </Routes> 

  );
}

export default App;
