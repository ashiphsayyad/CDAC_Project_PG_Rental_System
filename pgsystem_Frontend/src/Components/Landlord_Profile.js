import mystore from './store.js'
import React from "react";
export default class LandlordProfile extends React.Component{
    constructor(props)
    {
        super(props);
        this.state={
            landlord:[],
           
        }
    }
    
   
    logout=()=>{
        mystore.dispatch({type:'LOGGEDOUT'});
        localStorage.removeItem("loggedinuser");
        this.props.history.push("/");
    }
    
    
    submitForm= (e) => {
        e.preventDefault();
        let email_id=this.refs.email_id.value; 
        alert(email_id);
        const url="http://localhost:8080/getLByEmailId?email_id="+email_id;
        fetch(url)
            .then(resp => resp.json())
            .then(data => {this.setState({ landlord: data });
            console.log(data);
            console.log(this.state.landlord);
    });
            
    }    
    
    render(){
        const landlord=this.state.landlord;
        console.log(landlord);
        if(landlord.length==0)
        {

        
        return(
           
             <div className="container-fluid">
                
                <div className="form-group" style={{paddingRight:'1200px'}}>
                    <label style={{color:'crimson'}} for="email_id" style={{textAlign:'left'}}><b>Enter Email ID:</b></label>
                    <input type="text"  ref="email_id" />
                    <button type="submit" className="btn btn-dark " value="Get profile" onClick={this.submitForm}>Get Profile</button>
                </div>
                <div >
                    <div disabled={!this.submitForm} >
                    <h1 className = "text-center" >Tenant Profile</h1>
                    <table className = "table table-striped" >
                     <thead>
                    <tr style={{color:'#0d6efd',fontSize:'30px'}}  class="p-3 mb-2 bg-primary text-white"  >
                
                    <td>User ID</td>
                    <td>ID</td>
                    <td>Email ID</td>
                    <td>First Name</td>
                    <td>Last Name</td>
                    <td>User Type</td>
                </tr>

            </thead>

                                 
            <tbody>
               
             </tbody>
            
        </table>         
         </div>
                     
        </div>
        </div>     
        )
    }
    else{
        return(
           
            <div className="container-fluid">
               
               <div className="form-group" style={{paddingRight:'1200px'}}>
                   <label style={{color:'crimson'}} for="email_id" style={{textAlign:'left'}}><b>Enter Email ID:</b></label>
                   <input type="text"  ref="email_id" />
                   <button type="submit" className="btn btn-dark " value="Get profile" onClick={this.submitForm}>Get Profile</button>
               </div>
               <div >
                   <div disabled={!this.submitForm} >
                   <h1 className = "text-center" >Tenant Profile</h1>
                   <div className="form-group" style={{padding: '50px 150px 50px 150px',
    margin: '100px  400px 100px 400px'}}>
                        <label style={{color:'crimson'}}  style={{textAlign:'left'}}><b>User ID:</b></label>
                        <input type="text"  ref="email_id"  value={this.state.tenant.user_id.user_id}/>
                        
                     </div>
                    {/*<thead>
                   <tr style={{color:'#0d6efd',fontSize:'30px'}}  class="p-3 mb-2 bg-primary text-white"  >
               
                   <td>User ID</td>
                   <td>ID</td>
                   <td>Email ID</td>
                   <td>First Name</td>
                   <td>Last Name</td>
                   <td>User Type</td>
               </tr>

           </thead>

                                
           <tbody>
               {/* {
              this.state.tenant.map(
                   obj=>{
                   return(
                   
                           <tr style={{color:'pink',fontSize:'18px'}} class="p-3 mb-2 bg-info text-white">
                               <td>{this.state.tenant.user_id.user_id}</td>
                               <td>{this.state.tenant.tid}</td>
                               <td>{this.state.tenant.user_id.email_id}</td>
                               <td>{this.state.tenant.fname}</td>
                               <td>{this.state.tenant.lname}</td>
                               <td>{this.state.tenant.user_id.user_type}</td>
                               
                           </tr>
                     /*  )
                   }
               )

               }
               </tbody>
           
       </table>*/}         
        </div>
                    
       </div>
       </div>     
       )
    }
    }       
}