import React from 'react';
import './User-Reg.css';
import { BrowserRouter, Link, Route } from 'react-router-dom'
import UserRegistration from './Tenant-Registration';
export default class UserLogin extends React.Component{
    constructor(props)
    {
        super(props);
    }
    handleClick=()=>{
        this.props.history.push("/Registration")
    }
    render(){
        return(
            <div className="bgimg">
            <div className="container-fluid">
                <h1 style={{color:'floralwhite'}}><b>Login Form</b></h1>
                
                
                <form className="RegForm">
                <div className="form-group">
                    <label style={{color:'crimson'}} for="eid" style={{textAlign:'left'}}><b>Enter Email ID:</b></label>
                    <input type="text" id="eid" name="eid" className="form-control" ></input>
                </div>
                <div className="form-group" >
                    <label  style={{color:'lightcoral'}} for="pwd" style={{textAlign:'left'}}><b>Enter Password:</b></label>
                    <input type="password" id="pwd" name="pwd" className="form-control" ></input>
                </div>
                <button type="submit" className="btn btn-dark btn-lg btn-block"><b>Login</b></button>
                </form>
                <br/>
              
            </div>
            </div>
        );
    }
}