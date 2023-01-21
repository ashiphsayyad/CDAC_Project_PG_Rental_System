import React from "react";

import mystore from './store.js'

export default class RegisteredUSer extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            reg_users: []
        }    
   }

   logout=()=>{
    mystore.dispatch({type:'LOGGEDOUT'});
    localStorage.removeItem("loggedinuser");
    this.props.history.push("/home");
}


   componentDidMount = () =>{
       fetch("http://localhost:8080/all")
       .then(resp => resp.json())
       .then(data => {this.setState({reg_users:data});
                    });
   } 




    render () {
        return(
            
            <div>
            <h1 className = "text-center" >Registered Users List</h1>
            <table className = "table table-striped table-dark" >
                <thead>
                <tr style={{fontSize:'18px',border:'2px solid yellowgreen',fontFamily:'serif',backgroundColor:"ActiveBorder"}}  class="p-3 mb-2 bg-primary text-white" >
                
                    <td>User ID</td>
                    <td>User Email ID</td>
                    <td>User Type</td>
                    
                </tr>

            </thead>

                                 
                <tbody>
                {
                this.state.reg_users.map(
                    obj=>{
                        return(
                            <tr class="bg-primary" style={{color:'white'}}>
                                <td>{obj.user_id}</td>
                                <td>{obj.email_id}</td>
                                <td>{obj.user_type}</td>
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