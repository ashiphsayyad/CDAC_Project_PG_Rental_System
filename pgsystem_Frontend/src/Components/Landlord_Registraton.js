import React from 'react';
import './User-Reg.css';

export default class LandlordRegistration extends React.Component{
    constructor(props)
    {
        super(props);
        this.state={
            fname:"",
            lname:"",
            email_id:"",
            password:"",
            errors:{
                fnameError:"",
                lnameError:"",
                email_idError:"",
                passwordError:"",
            },
            validFname:false,
            validLname:false,
            validEmail:false,
            validPassword:false,
            validForm:false,
            users:null,

        };
        
        
    }


    handleChange=(e)=>{
        const nameRegex=/^[A-Z]{1}[a-z]{2,}/;
        const emailRegex=/^[A-Za-z0-9.]{6,}@[A-Za-z0-9.]{5,12}\.[a-z]{2,5}$/;
        const passwordRegex=/^[A-Za-z0-9]{4,8}[,.#$%@^&*()!]{1,4}[a-zA-Z0-9]{2,4}/;
        const input=e.target;
        const nm=input.name;
        const value=input.value;
        let errors=this.state.errors;
        let fnameFlag=this.state.validFname;
        let lnameFlag=this.state.validLname;
        let emailFlag=this.state.validEmail;
        let pwdFlag=this.state.validPassword;
        switch(nm)
        {
            case 'fname':
            if(!nameRegex.test(value))
            {
                errors.fnameError="Invalid First name";
                fnameFlag=false;
            }
            else{
                fnameFlag=true;
            }
            break;
            case 'lname':
            if(!nameRegex.test(value))
            {
                errors.lnameError="Invalid last name";
                lnameFlag=false;
            }
            else{
                lnameFlag=true;
            }
            break;
            case 'email_id':
            if(!emailRegex.test(value))
            {
                errors.email_idError="Invalid Email Id";
                emailFlag=false;
            }
            else{
                 emailFlag=true;
            }
            break;
            case 'password':
            if(!passwordRegex.test(value))
            {
                errors.passwordError="Invalid password";
                pwdFlag=false;
            }
            else{
                pwdFlag=true;
            }
            break;
            case 'fname':
            if(!nameRegex.test(value))
            {
                errors.fnameError="Invalid First name";
                fnameFlag=false;
            }
            else{
                fnameFlag=true;
            }
            break;
        }
        
        this.setState({errors,[nm]:value,validFname:fnameFlag,validLname:lnameFlag,validEmail:emailFlag,validPassword:pwdFlag},()=>{this.setState({validForm:this.state.validFname && this.state.validLname && this.state.validEmail && this.state.validPassword})});
    }
    
    submitForm=(e)=>{
        e.preventDefault();
        alert("Form is submitted");
        console.log(this.state);
        const req={
            method:'POST',
            headers:{
                'Content-Type':"application/json"
            },
            body:JSON.stringify({
                fname:this.state.fname,
                lname:this.state.lname,
                email_id:this.state.email_id,
                password:this.state.password
            }),
        }
        const url="http://localhost:8080/landlordreg";
        fetch(url,req)
            .then(res=>{res.json()
                if(res.status==200)
                {
                    alert("Landlord registered successfully");
                    this.props.history.push("/login");
                }
                else
                {
                    alert("Registrtion failed");
                }
            });
        
    }

    render(){
        return(
           
            <div className="container-fluid" >
                <h1 ><b> Landlord Registration Form</b></h1>
              
                
                <form className="RegForm" style={{padding: '50px 150px 50px 150px',
    margin: '100px  400px 100px 400px'}} >
                <div className="form-group">
                    <label style={{color:'lightcoral'}} for="fname" style={{textAlign:'left'}}><b>Enter First name:</b></label>
                    <input type="text" id="fname" ref="fname"  name="fname" className="form-control" value={this.state.fname} onChange={this.handleChange}></input>

                </div>
                <div className="form-group">
                    <label style={{color:'lightcoral'}} for="lname" style={{textAlign:'left'}}><b>Enter Last name:</b></label>
                    <input type="text" id="lname" ref="lname" name="lname" className="form-control"  value={this.state.lname} onChange={this.handleChange}></input>

                </div>
                <div className="form-group">
                    <label style={{color:'lightcoral'}} for="email_id" style={{textAlign:'left'}}><b>Enter Email ID:</b></label>
                    <input type="text" id="email_id" ref="email_id" name="email_id" className="form-control"  value={this.state.email_id} onChange={this.handleChange}></input>
                </div>
                <div className="form-group">
                    <label  style={{color:'lightcoral'}} for="password" style={{textAlign:'left'}}><b>Enter Password:</b></label>
                    <input type="password" id="password" ref="password"  name="password" className="form-control" value={this.state.password} onChange={this.handleChange}></input>
                </div>
              
                <button type="submit" className="btn btn-dark btn-lg btn-block" disabled={!this.state.validForm} onClick={this.submitForm} value="Register"><b>Register</b></button>
                
   
                <br/>
                <p><h4 className="bg info" ><i>Already Registered? <a style={{color:'indigo'}} href="/login">Login</a></i></h4></p>
                <br/>
                </form>
            </div>
         
        );
    }
}