export default function Updatepass() {
    return (
  <div className="Form">
<center>
  <h1>Update Password</h1> 
  <form method="post" id="form" encType="multipart/form-data">
    <input type="password" name="pass" placeholder="Enter a New Password" required /><br /><br />
    <button id="but" name="Submit" autoComplete="off">Submit</button>
  </form></center>

  </div>
  
    );
  }
  