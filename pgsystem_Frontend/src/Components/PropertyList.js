import React from "react";

import './User-Reg.css';
import { BrowserRouter ,Route,Link } from 'react-router-dom';

import mystore from './store.js'


import { Button, ButtonGroup} from 'react-bootstrap'
import { render } from '@testing-library/react';

export default class PropertyListAdmin extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            list_property: []
        }    
   }

   logout=()=>{
    mystore.dispatch({type:'LOGGEDOUT'});
    localStorage.removeItem("loggedinuser");
    this.props.history.push("/home");
    }


    componentDidMount = () =>{
        fetch("http://localhost:8080//getProps")
        .then(resp => resp.json())
        .then(data => {this.setState({list_property:data});
                        
                   //  alert(this.state.list_landlord.length));
                console.log(data)})
                   //  alert(data.length))

    } 


    render () {
        return(
           
            
            <div>
            <h1 className = "text-center" >Property List</h1>
            <table className = "table table-striped table-dark" >
                <thead>
                <tr style={{fontSize:'18px',border:'2px solid yellowgreen',fontFamily:'serif',backgroundColor:"ActiveBorder"}}  class="p-3 mb-2 bg-primary text-white" >
                
                    <td>Property ID</td>
                    <td>Property Type</td>
                    <td>Area</td>
                    <td>City</td>
                    <td>User</td>
                    <td>Rent</td>
                    <td>Brokerage</td>
                    

                </tr>

            </thead>

                                 
                <tbody>
                {
                this.state.list_property.map(
                    obj=>{
                        return(
                            <tr class="bg-primary" style={{color:'white'}}>
                                <td>{obj.pr_id}</td>
                                <td>{obj.pr_type}</td>
                                <td>{obj.area}</td>
                                <td>{obj.city}</td>
                                <td>{obj.user}</td>
                                <td>{obj.rent}</td>
                                <td>{obj.brokerage}</td>
                               

                            </tr>
                        )
                    }
                )
                }
                </tbody>
            
        </table>

    </div>
            



        )
    }
}