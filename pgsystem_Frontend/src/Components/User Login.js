import React from 'react';
import './User-Reg.css';
import mystore from './store.js'
export default class UserLogin extends React.Component{
    constructor(props)
    {
        super(props);
        this.state={
            loginerror:"",
        };
    }
    checkLogin = () => {
        let email_id = this.refs.email_id.value;
        let password = this.refs.password.value;
        
        const url = "http://localhost:8080/login?email_id=" + email_id + "&password=" + password;
        fetch(url)
            .then(res => res.text())
            .then(data => {

                if(data.length != 0 )
                {
                    const obj = JSON.parse(data);
                    console.log(JSON.stringify(obj));
                    if(obj.user_id.user_type == "tenant")
                    {
                        mystore.dispatch({type: 'LOGGEDIN'});
                        localStorage.setItem("loggedtenant", JSON.stringify(obj));
                        this.props.history.push("/tenantDashboard");
                        console.log(JSON.parse(localStorage.getItem("loggedtenant")).tid); 
                    }
                    else if (obj.user_id.user_type == "landlord")
                    {
                        mystore.dispatch({type: 'LOGGEDIN'});
                        localStorage.setItem("loggedlandlord", JSON.stringify(obj));
                        this.props.history.push("/landlordDashboard");
                        console.log(JSON.parse(localStorage.getItem("loggedlandlord")).lid);
                    }
                    else if( obj.user_type=="admin")
                    {
                    mystore.dispatch({type:'LOGGEDIN'})
                    this.props.history.push("/adminDashboard")
                    }
                   
                }
                
                else{
                    alert("wrong id and password")
                    this.setState({ loginerror: "Wrong Email and password"});
                }

           })

        }

    render(){
        return(
           
            <div className="container-fluid">
                <h1 ><b>Login Form</b></h1>
               
               
                <form className="RegForm" style={{padding: '50px 150px 50px 150px',
    margin: '100px  400px 100px 400px'}}>
                <div className="form-group">
                    <label style={{color:'crimson'}} for="email_id" style={{textAlign:'left'}}><b>Enter Email ID:</b></label>
                    <input type="text" className="form-control" ref="email_id" />
                </div>
                <div className="form-group" >
                    <label  style={{color:'lightcoral'}} for="password" style={{textAlign:'left'}}><b>Enter Password:</b></label>
                    <input type="password"  ref="password" className="form-control" />
                </div>
                <button type="button" className="btn btn-dark btn-lg btn-block" value="Login" onClick={this.checkLogin} ><b>Login</b></button>
             
             
                <h4 className="bg info" style={{textAlign:''}} ><i>Register- <a style={{color:'indigo'}} href="/registerTenant">Tenant</a> / <a style={{color:'indigo'}} href="/registerLandlord">Landlord</a></i></h4>
                <br/>
                </form>
                <br/>
                
                <br/>
                
            </div>
           
        );
    }
}