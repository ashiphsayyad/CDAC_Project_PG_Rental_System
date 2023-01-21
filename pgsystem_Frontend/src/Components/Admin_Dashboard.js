import React from 'react';
import Landlordlist from './Landlord_list';
import TenantList from './Tenant_List';
import './User-Reg.css';
import { BrowserRouter ,Route,Link } from 'react-router-dom';

import mystore from './store.js'
import TenantProfile from './Tenant_Profile';
import TenantProperties from './Tenant_Properties';
import TenantSearch from './Tenant_search';

import { Button, ButtonGroup} from 'react-bootstrap'
import { render } from '@testing-library/react';
import RegisteredUSer from './RegisteredUser_list';
import TransactionList from './TransactionList';
import PropsList from './PropertyList';
import PropertyListAdmin from './PropertyList';


export default class AdminDashboard extends React.Component{

    constructor(props) {
        super(props);
        this.state = ''
   }

   logout=()=>{
    mystore.dispatch({type:'LOGGEDOUT'});
    localStorage.removeItem("loggedinuser");
    this.props.history.push("/");
}


    render(){
        return(

            <div>
                    <div>
                        
                    <div>
                 
                 <BrowserRouter>
                <div className="bg-text">
                <h1 style={{textAlign:'left'}} ><b>Admin Dashboard</b></h1>
                <ul className="nav nav-tabs"  >
                <li className="nav-item" style={{color:'black'}}><Link className="nav-link" to="/" style={{color:'indigo'}} ><b>Registered Users</b></Link></li>
                    <li className="nav-item" style={{color:'black'}}><Link className="nav-link" to="/tenantlist" style={{color:'indigo'}} ><b>Tenant</b></Link></li>
                    <li className="nav-item" style={{color:'black'}}><Link className="nav-link" to="/landlordlist" style={{color:'indigo'}} ><b>Landlord</b></Link></li>
                    <li className="nav-item" style={{color:'black'}}><Link className="nav-link" to="/propertylist" style={{color:'indigo'}} ><b>Properties</b></Link></li>
                    <li className="nav-item" style={{color:'black'}}><Link className="nav-link" to="/trlist" style={{color:'indigo'}} ><b>Transactions</b></Link></li>
                    <li className="nav-item" style={{color:'black',paddingLeft:'800px'}}><a href="" onClick={this.logout} style={{color:'indigo',textDecorationLine:'none'}} ><b>Logout</b></a></li>
                    
                </ul>
    
                <div>
                    <Route path="/" exact component={ RegisteredUSer}></Route>
                    <Route path="/tenantlist" component={ TenantList}></Route>
                    <Route path="/landlordlist" component={ Landlordlist}></Route>
                    <Route path="/propertylist" component={PropertyListAdmin}></Route>
                    <Route path="/trlist" component={TransactionList }></Route>
                 </div>
                    
                </div>
                </BrowserRouter>

            </div>




            </div>

        </div>

        )
    }
}