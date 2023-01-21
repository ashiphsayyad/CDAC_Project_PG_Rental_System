import logo from './logo.svg';
import './App.css';
import UserLogin from './Components/User Login';
import TenantRegistration from './Components/Tenant-Registration';
import { Link, Route } from 'react-router-dom';
import Home from './Components/HomePage';
import Contact from './Components/ContactUS';
import LandlordRegistration from './Components/Landlord_Registraton';
import LandlordDashboard from './Components/Lanlord_Dashboard';
import TenantDashboard from './Components/Tenant_Dashboard';
import AdminDashboard from './Components/Admin_Dashboard';
import ForgotPassword from './Components/Forgot_Password';
import MainMenu from './Components/MainMenu.js';


function App() {
  return (
   
    <div className="bg">
      <MainMenu/>
     
    </div>
    
  );
}

export default App;
