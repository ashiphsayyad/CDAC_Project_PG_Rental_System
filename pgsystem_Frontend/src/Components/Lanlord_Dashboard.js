import React from 'react';
import AddProperties from './AddProperties';
import LandlordProperties from './LandlordProperties';
import LandlordProfile from './L_Profile';
import './User-Reg.css';
import { BrowserRouter ,Route,Link } from 'react-router-dom';

import mystore from './store.js'
import Payment from './Payment';
import ImageUpload from './ImageUpload';

export default class LandlordDashboard extends React.Component{
    constructor(props) {
        super(props);
        this.state = '';
    
   }
    logout=()=>{
        mystore.dispatch({type:'LOGGEDOUT'});
        localStorage.removeItem("loggedinuser");
        this.props.history.push("/");
    }
    render() {
        return (
            <div>
                
                <BrowserRouter>
                <div className="bg-text">
                <h1 style={{textAlign:'left'}} ><b>Welcome: {JSON.parse(localStorage.getItem("loggedlandlord")).fname}</b></h1>
                
                <ul className="nav nav-tabs"  >
                    <li className="nav-item" style={{color:'black'}}><Link className="nav-link" to="/addProps" style={{color:'indigo'}} ><b>AddProperties</b></Link></li>
                    <li className="nav-item" style={{color:'black'}}><Link className="nav-link" to="/imgUpload" style={{color:'indigo'}} ><b>Upload Images </b></Link></li>
                    <li className="nav-item" style={{color:'black'}}><Link className="nav-link" to="/l_props" style={{color:'indigo'}} ><b>Properties</b></Link></li>
                    
                    <li className="nav-item" style={{color:'black'}}><Link className="nav-link" to="/" style={{color:'indigo'}} ><b>Profile</b></Link></li>
                    
                    <li className="nav-item" style={{color:'black',paddingLeft:'900px'}}><a href="" onClick={this.logout} style={{color:'indigo',textDecorationLine:'none'}} ><b>Logout</b></a></li>
                    
                </ul>
    
                <div>
                    <Route path="/imgUpload" component={ImageUpload}></Route>
                    <Route path="/" exact component={LandlordProfile}></Route>
                    <Route path="/l_props" component={LandlordProperties}></Route>
                    <Route path="/addProps" component={AddProperties}></Route>
                   
                 </div>
                    
                </div>
                </BrowserRouter>
               
                
            
            </div>
            

            
        );
     }
}