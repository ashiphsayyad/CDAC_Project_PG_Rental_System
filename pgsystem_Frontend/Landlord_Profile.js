import mystore from './store.js'
import React from "react";
export default class LandlordProfile extends React.Component{
    constructor(props)
    {
        super(props);
        this.state={
            landlord:[],
            lid: JSON.parse(localStorage.getItem("loggedlandlord")).lid
        }
    }
    
   
    logout=()=>{
        mystore.dispatch({type:'LOGGEDOUT'});
        localStorage.removeItem("loggedinuser");
        this.props.history.push("/");
    }


    componentDidMount = () =>{
        fetch("http://localhost:8080/getLandlord/"+this.state.lid)
        .then(resp => resp.json())
        .then(data => {this.setState({lanlord:data});
                        
                   //  alert(this.state.list_landlord.length));
                console.log(data)})
                   //  alert(data.length))

    }
    
    
  /*  submitForm= (e) => {
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
    */
    render(){
        const landlord=this.state.landlord;
        console.log(landlord);
        if(landlord.length==0)
        {

        
        return(
           
            <div className="container-fluid">
                
            <div className="form-group" style={{paddingRight:'1200px'}}>
               
                <button type="submit" className="btn btn-dark " value="Get profile" onClick={this.submitForm}>Get Profile</button>
            </div>
            
     </div>
        )
    }
    else{
            return (
            
                <div className="container-fluid">
                        
                <form className="RegForm" style={{padding: '50px 50px 50px 50px',
                                    margin: '100px  300px 100px 300px'}}>
                            
                            <div className="form-group">
                                <label style={{color:'lightcoral'}} for="tfname" style={{textAlign:'left'}}><b>First Name</b></label>
                                <input type="text" id="tfname" ref="tfname" onChange={this.handleChnage} name="tfname" className="form-control"  value={this.state.landlord.fname} ></input>
                            </div>

                            <div className="form-group">
                                <label style={{color:'lightcoral'}} for="tlname" style={{textAlign:'left'}}><b>Last Name</b></label>
                                <input type="text" id="tlname" ref="tlname" onChange={this.handleChnage} name="tlname" className="form-control"   value={this.state.landlord.lname} ></input>
                            </div>

                            <div className="form-group">
                                <label style={{color:'lightcoral'}} for="temailid" style={{textAlign:'left'}}><b>Email ID</b></label>
                                <input type="text" id="temailid" ref="temailid" onChange={this.handleChnage} name="temailid" className="form-control"   value={this.state.landlord.user_id.email_id} ></input>
                            </div>
                    
                            <div className="form-group">
                                <label style={{color:'lightcoral'}} for="temailid" style={{textAlign:'left'}}><b>User Type</b></label>
                                <input type="text" id="temailid" ref="temailid" onChange={this.handleChnage} name="temailid" className="form-control"   value={this.state.landlord.user_id.user_type} ></input>
                            </div>

                           
                    
                        </form>



                   

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
           
           
       )
    }
    }       
}