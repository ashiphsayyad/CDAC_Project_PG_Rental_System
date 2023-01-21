import React from "react";

import mystore from './store.js'

export default class TenantList extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            list_tenant: []
        }    
   }

   logout=()=>{
    mystore.dispatch({type:'LOGGEDOUT'});
    localStorage.removeItem("loggedinuser");
    this.props.history.push("/");
    }

    componentDidMount = () =>{
        fetch("http://localhost:8080/tenantlist")
        .then(resp => resp.json())
        .then(data => {this.setState({list_tenant:data});
                        
                   //  alert(this.state.list_landlord.length));
                console.log(data)})
                   //  alert(data.length))

    } 



    render () {
        return(
           
            <div>
            <h1 className = "text-center" >Tenant List</h1>
            <table className = "table table-striped table-dark" >
                <thead>
                <tr style={{fontSize:'18px',border:'2px solid yellowgreen',fontFamily:'serif',backgroundColor:"ActiveBorder"}}  class="p-3 mb-2 bg-primary text-white" >
                
                    <td>Tenant ID</td>
                    <td>User ID</td>
                    <td>User Email ID</td>
                    <td>First Name</td>
                    <td>Last Name</td>
                    
                </tr>

            </thead>

                                 
                <tbody>
                {
                this.state.list_tenant.map(
                    obj=>{
                        return(
                            <tr class="bg-primary" style={{color:'white'}}>
                                <td>{obj.tid}</td>
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