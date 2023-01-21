import React from 'react';
import { Link, Route, BrowserRouter } from 'react-router-dom';
import Home from './HomePage';
import Contact from './ContactUS';
import LandlordRegistration from './Landlord_Registraton';
import LandlordDashboard from './Lanlord_Dashboard';
import TenantDashboard from './Tenant_Dashboard';
import AdminDashboard from './Admin_Dashboard';
import ForgotPassword from './Forgot_Password';
import UserLogin from './User Login';
import TenantRegistration from './Tenant-Registration';
import mystore from './store.js'
import ImageUpload from './ImageUpload';

export default class MainMenu extends React.Component{
    constructor(props)
    {
        super(props);
        this.state={flag:false}
    }
    render(){
        mystore.subscribe(()=>{this.setState({flag:mystore.getState().loggedin})})
        return(
            <BrowserRouter>
                <div className="bg-text" style={{display:this.state.flag?'none':'block'}}>
                <h1 style={{textAlign:'left'}} ><b>Online Pg Rental</b></h1>
                <ul className="nav nav-tabs"  >
                    <li className="nav-item" style={{color:'black'}}><Link className="nav-link" to="/"  style={{color:'indigo'}} ><b>Home</b></Link></li>
                    <li className="nav-item" style={{color:'black'}}><Link className="nav-link" to="/login" style={{color:'indigo'}} ><b>Login</b></Link></li>
                    <li className="nav-item" style={{color:'black'}}><Link className="nav-link" to="/registerTenant" style={{color:'indigo'}} ><b>Tenant Registration</b></Link></li>
                    <li className="nav-item" style={{color:'black'}}><Link className="nav-link" to="/registerLandlord" style={{color:'indigo'}}><b>Landlord Registration</b></Link></li>
                    <li className="nav-item" style={{color:'black'}}><Link className="nav-link" to="/contact" style={{color:'indigo'}}><b>Contact Us</b></Link></li>
                </ul>
    
                <div>
                    <Route path="/" exact component={Home}></Route>
                    
                    <Route path="/login" component={UserLogin}></Route>
                    <Route path="/registerTenant" component={TenantRegistration}></Route>
                    <Route path="/registerLandlord" component={LandlordRegistration}></Route>
                    <Route path="/contact" component={Contact}></Route>
                   
                 </div>
                    
                </div>
               
                    
                    <Route path="/landlordDashboard" component={LandlordDashboard}></Route>
                    <Route path="/tenantDashboard" component={TenantDashboard}></Route>
                    <Route path="/adminDashboard" component={AdminDashboard}></Route>
            </BrowserRouter>
        )
    }
}