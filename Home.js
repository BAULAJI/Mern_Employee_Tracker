import './home.css';
import {Link} from "react-router-dom";
export default function home() {
  return (

<div className="s">

  <header>
    <nav>
      <ul>
        <img src="https://t3.ftcdn.net/jpg/03/32/57/16/360_F_332571695_XhkzHdUbTg2gYYWbTOfKzSB9tNrIGPOe.jpg" alt="img" width="50px" />
        <li> <h2 className="d2">KV CONTROLS</h2></li>
        <li><Link to='/'>Home</Link></li>
        <li><a href="#about">About Us</a></li>
        <li><Link to='Login1'>Login</Link></li>
        {/* <li><Link to='Employeeup'>Upload</Link></li>
        <li><Link to='Adminaccess'>Admin</Link></li> */}
      </ul>
    </nav>
  </header>
  
  <img src="https://www.blumenbecker.com/fileadmin/_processed_/6/7/csm_electrical-machinery_31886b8ae8.jpg" alt='img' width={1473} />
  <br /><br /><br /><br /><br /><br /><br />
  <img src="https://www.blumenbecker.com/fileadmin/blumenbecker/02-industry-service/content-images-industry-service/electrical-machinery-consulting.jpg" alt='machine Imag' style={{float: 'right', paddingLeft: 40, paddingRight: 20}} height={300} />
  <h1 style={{color: 'blue', paddingLeft: 20}}> Vendor-independent repairs and expert advice</h1><br />
  <p className="p1" style={{paddingLeft: 20}}>
    Our technicians are equipped to repair not only drive equipment of all brands, constructions and types (up to 10 kV; 7.5 MW; 25 t), but also pumps, welding machines, electromagnets and other electrical equipment, irrespective of the manufacturer. Whether it’s cleaning, rewinding, balancing, re-bearing , or painting, our goal is always the same – to return your machinery to you in a state as close to new as possible.
    <br /><br />
    We also advise in matters regarding drive technology, for instance with respect to new plants, refits or modernisations, and tell you how to save energy by employing controlled drives.
    Major repair work is performed in our repair workshops, which are equipped with the latest technology, including a pyrolysis oven, vacuum impregnation systems, computer-controlled balancing benches, the latest test bays, and 25-tonne crane systems. We employ only the latest measuring equipment and techniques.<br /><br /> Naturally, we also provide you with full documentation of all work performed. All important procedural steps are documented by process logger.
    We have a wide range of spare parts for electric motors from many different manufacturers in stock and also offer new motors on request. Even if parts are no longer available, we can often prolong the service life of your machinery considerably by building them especially for you.
    <br /><br /><br /><br /><br /><br /><br />
  </p>

   <div className='container'>
    <h1 className="heading">OUR SERVICES</h1>
    <div className="box-container">
      <div className="box">
        <img src="https://cdn-icons-png.flaticon.com/512/939/939160.png" alt='img' width={50}/>
        <h3>Repairs</h3>
        <p>We generally keep a stock of the most important wearing parts. We can also provide professional engineering and repair services for more complex challenges by working with our other business divisions. </p>
      </div>
      <div className="box">
        <img src="https://www.svgrepo.com/show/76775/test.svg" alt="img" />
        <h3>Testing</h3>
        <p>We examine and test your mobile electrical machinery in the intervals prescribed by DGUV V3 and other regulations. This includes preparing the necessary documentation for you.</p>
      </div>
      <div className="box">
        <img src="https://cdn-icons-png.flaticon.com/512/1/1383.png" alt='img' />
        <h3>Installation</h3>
        <p>Our trained installers will professionally install and dismantle your electrical machinery following a modernisation or a similar project</p>
      </div>
      <div className="box">
        <img src="https://t4.ftcdn.net/jpg/02/76/27/83/360_F_276278303_U8w9UNBZgY4pbYvWrDdHkEcSID0Wpy49.jpg" width={70}  alt='img'/>
        <h3>Modernision</h3>
        <p>We protect the value of your investments by modernising your electrical machinery.</p>
      </div>
      <div className="box">
        <img src="https://cdn-icons-png.flaticon.com/512/4278/4278812.png"  alt='img'/>
        <h3>Maintainance</h3>
        <p>We provide tailor-made, manufacturer-agnostic maintenance and immediately make any repairs that may be necessary.</p>
      </div>
      <div className="box">
        <img src="https://cdn-icons-png.flaticon.com/512/5463/5463158.png"  alt='img'/>
        <h3>Independent advice</h3>
        <p>We provide impartial advice, free of charge and with no obligation. Our partnerships with a large number of reputable manufacturers and our many years of experience enable us to develop solutions that are tailored precisely to your requirements.</p>
      </div>
    </div>
  </div>
  <br />
  <br /><br /><br />
  <footer id="about">
    <h2>About Us</h2>
    <p>Our Company Established in 2013 , KV Control has gained immense expertise in offering Electrical<br /> Machine Repairing Services etc. We are located in Salem, Tamil Nadu and providing Electrical<br /> Machine Repairing Services to the clients.</p>
    <br />
    <img src="https://freesvg.org/img/Mail-Icon-White-on-Black.png" width="30px" alt='img' style={{float: 'left', paddingRight: 10}} />
    <h3>Email:vijayan.k@kvcontrols.com</h3>
    <img src="https://icon-library.com/images/contact-us-icon-black/contact-us-icon-black-5.jpg" alt='img' width="30px" style={{float: 'left', paddingRight: 8}} />
    <h3>Contact no:+919489795440</h3>
    <center><p>© 2024  KV Controls. All rights reserved.</p></center>
    <div>
    </div></footer>
 
    </div>
  

  );
}


