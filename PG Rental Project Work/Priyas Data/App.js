import logo from './logo.svg';
import './App.css';
import UserLogin from './Components/User Login';
import TenantRegistration from './Components/Tenant-Registration';
import { Link, Route } from 'react-router-dom';
import Home from './Components/HomePage';
import Contact from './Components/ContactUS';
import LandlordRegistration from './Components/Landlord_Registraton';



function App() {
  return (
   
    <div className="bg">
      <div className="bg-text" >
    <h1 style={{color:'aliceblue'}}>Online Pg Rental</h1>
    <ul className="nav nav-tabs">
      <li className="nav-item"><Link className="nav-link" to="/home" style={{color:'floralwhite'}}><b>Home</b></Link></li>
      <li className="nav-item"><Link className="nav-link" to="/login" style={{color:'floralwhite'}} ><b>Login</b></Link></li>
      <li className="nav-item"><Link className="nav-link" to="/registerTenant" style={{color:'floralwhite'}}><b>Tenant Registration</b></Link></li>
      <li className="nav-item"><Link className="nav-link" to="/registerLandlord" style={{color:'floralwhite'}}><b>Landlord Registration</b></Link></li>
      <li className="nav-item"><Link className="nav-link" to="/contact" style={{color:'floralwhite'}}><b>Contact Us</b></Link></li>
    </ul>
    
     <div>
       <Route path="/home" component={Home}></Route>
       <Route path="/login" component={UserLogin}></Route>
       <Route path="/registerTenant" component={TenantRegistration}></Route>
       <Route path="/registerLandlord" component={LandlordRegistration}></Route>
       <Route path="/contact" component={Contact}></Route>
     </div>
   
  </div>
    </div>
    
  );
}

export default App;
