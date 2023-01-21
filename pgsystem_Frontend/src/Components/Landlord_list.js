import React from "react";

import './User-Reg.css';
import { BrowserRouter ,Route,Link } from 'react-router-dom';

import mystore from './store.js'


import { Button, ButtonGroup} from 'react-bootstrap'
import { render } from '@testing-library/react';


export default class Landlordlist extends React.Component{
    
    constructor(props) {
        super(props);
        this.state = {
            list_landlord: []
        }    
   }

   logout=()=>{
    mystore.dispatch({type:'LOGGEDOUT'});
    localStorage.removeItem("loggedinuser");
    this.props.history.push("/");
    }


    componentDidMount = () =>{
        fetch("http://localhost:8080/landlordlist")
        .then(resp => resp.json())
        .then(data => {this.setState({list_landlord:data});
                        
                   //  alert(this.state.list_landlord.length));
                console.log(data)})
                   //  alert(data.length))

    } 



    render () {
        return(
            
            <div>
            <h1 className = "text-center" >Landlord List</h1>
            <table className = "table table-striped table-dark" >
                <thead>
                <tr style={{fontSize:'18px',border:'2px solid yellowgreen',fontFamily:'serif',backgroundColor:"ActiveBorder"}}  class="p-3 mb-2 bg-primary text-white" >
                
                    <td>Landlord ID</td>
                    <td>User ID</td>
                    <td>User Email ID</td>
                    <td>First Name</td>
                    <td>Last Name</td>
                    
                </tr>

            </thead>

                                 
                <tbody>
                {
                this.state.list_landlord.map(
                    obj=>{
                        return(
                            <tr class="bg-primary" style={{color:'white'}}> 
                                <td>{obj.lid}</td>
                                <td>{obj.user_id.user_id}</td>
                                <td>{obj.user_id.email_id}</td>
                                <td>{obj.fname}</td>
                                <td>{obj.lname}</td>
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