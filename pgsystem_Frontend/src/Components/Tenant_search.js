import React from "react";
import mystore from './store.js';
export default class TenantSearch extends React.Component{
    constructor(props) {
        super(props);
        this.state = { 
            list_property: [],
            propertytype:"",
            usertype: "",
            citytype: "",
            tid:JSON.parse(localStorage.getItem("loggedtenant")).tid
        }   
       
    }
    
   logout=()=>{
    mystore.dispatch({type:'LOGGEDOUT'});
    localStorage.removeItem("loggedinuser");
    this.props.history.push("/");
    }

    submitForm = (e) =>{
        e.preventDefault();
        const user=this.state.usertype;
        const pr_type = this.state.propertytype;
        const city = this.state.citytype;
        fetch("http://localhost:8080/getByType?pr_type="+pr_type+"&user="+user+"&city="+city)
        .then(resp => resp.json())
        .then(data => {this.setState({list_property:data});
                        
                   //  alert(this.state.list_landlord.length));
                console.log(data)})
                   //  alert(data.length))

    } 
    handleChnage=(e)=>{
        e.preventDefault();
        const input=e.target;
        const nm=input.name;
        const val=input.value;
        console.log(val);
        this.setState({[nm]:val});
    }

    cart =(e)=>{

        const input=e.target;
        console.log(input.id);
        const id=input.id;
        const arr=id.split('_');
        const [pr_id,rent,brokerage]=id.split('_');
        
        console.log(arr);
        const data={
            method:'POST',
            headers:{
                'Content-Type':"application/json"
            },
            body:JSON.stringify({
                tid:this.state.tid,
                pr_id:pr_id,
                rent:rent,
                brokerage:brokerage,

            }),
        }
        console.log(data);
      
        console.log(pr_id);
        const url="http://localhost:8080/saveTr?pr_id="+pr_id;
        fetch(url,data)
            .then(res=>{res.json()
                if(res.status==200)
                {
                    alert("Transaction done");
                    this.props.history.push("/t_cart");
                }
                else
                {
                    alert("failed to add to cart");
                }
            });
        
       
    }
    render(){
        const list=this.state.list_property;
        console.log(list);
        if(list.length==0)
        {

        
            return (
                
                <div>
                   
                <div>
            <form>
             <label for="floatingSelect" style={{backgroundColor:'crimson',fontFamily:'serif'}}><b>Go here to search Your PG ....  </b> </label>
             <div>
                
                <select class="dropdown" name="propertytype" style={{backgroundColor:'mediumaquamarine'}} onChange={this.handleChnage}>
                     <option selected>PROPERTY TYPE</option>
                     <option value="flat">Flats</option>
                     <option value="pg">PG</option>
                 
              </select>
              <select class="dropdown" name="usertype" style={{backgroundColor:'mediumaquamarine'}} onChange={this.handleChnage}>
                     <option selected>USER TYPE</option>
                     <option value="female">Female</option>
                     <option value="male">Male</option>
                </select>
                            
                <select class="dropdown" name="citytype" style={{backgroundColor:'mediumaquamarine'}} onChange={this.handleChnage}>
                     <option selected>CITY TYPE</option>
                     <option value="pune">Pune</option>
                    <option value="mumbai">Mumbai</option>
                    <option value="nashik">Nashik</option>
                    <option value="ahmedabad">Ahmedabad</option>  
                </select>
                            
                <button type="submit" className="btn btn-dark btn-lg btn-block" value="Search Property" onClick={this.submitForm}>Submit</button>
              </div>
              
              
            
            </form>
           </div>
           </div>
        )
    }
    else{
        return(
            <div>
                <div>
            <form>
             <label for="floatingSelect" style={{backgroundColor:'crimson',fontFamily:'serif'}}><b>Go here to search Your PG ....  </b> </label>
             <div>
                
                <select class="dropdown" name="propertytype" style={{backgroundColor:'mediumaquamarine'}} onChange={this.handleChnage}>
                     <option selected>PROPERTY TYPE</option>
                     <option value="flat">Flats</option>
                     <option value="pg">PG</option>
                 
              </select>
              <select class="dropdown" name="usertype" style={{backgroundColor:'mediumaquamarine'}} onChange={this.handleChnage}>
                     <option selected>USER TYPE</option>
                     <option value="female">Female</option>
                     <option value="male">Male</option>
            </select>
                            

            <select class="dropdown" name="citytype" style={{backgroundColor:'mediumaquamarine'}} onChange={this.handleChnage}>
                    <option selected>CITY TYPE</option>
                    <option value="pune">Pune</option>
                    <option value="mumbai">Mumbai</option>
                    <option value="nashik">Nashik</option>
                    <option value="ahmedabad">Ahmedabad</option>             
                </select>

                <button type="submit" className="btn btn-dark btn-lg btn-block" value="Search Property" onClick={this.submitForm}>Submit</button>
              </div>
              
              
            
            </form>
            </div>
            <div >
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
                    <td>Facillities</td>
                    <td>Add to Cart</td>
                </tr>

            </thead>

                                 
                <tbody>
                {
                this.state.list_property.map(
                    obj=>{
                        return(
                            <tr style={{color:'pink',fontSize:'18px'}} class="p-3 mb-2 bg-info text-white">
                                <td>{obj.pr_id}</td>
                                <td>{obj.pr_type}</td>
                                <td>{obj.area}</td>
                                <td>{obj.city}</td>
                                <td>{obj.user}</td>
                                <td>{obj.rent}</td>
                                <td>{obj.brokerage}</td>
                                <td>{obj.facilities}</td>
                                <td><button className="btn btn-danger" id={obj.pr_id+"_"+obj.rent+"_"+obj.brokerage} onClick={this.cart}>Finalize</button></td>
                            </tr>
                        )
                    }
                )
                }
                </tbody>
            
        </table>

            </div>
            </div>
        )
    }
    }
}