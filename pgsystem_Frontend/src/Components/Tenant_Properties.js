import React from "react";
import './User-Reg.css';
import { BrowserRouter ,Route,Link } from 'react-router-dom';
import mystore from './store.js'
import { Button, ButtonGroup} from 'react-bootstrap'
import { render } from '@testing-library/react';

export default class PropertyList extends React.Component{

    
    constructor(props) {
        super(props);
        this.state = {
            list_property: [],
            myImage:null,
            tid:JSON.parse(localStorage.getItem("loggedtenant")).tid
        }   
       
   }


    componentDidMount = () =>{
        fetch("http://localhost:8080/getProps")
        .then(resp => resp.json())
        .then(data => {this.setState({list_property:data});
                        
                   //  alert(this.state.list_landlord.length));
                console.log(data)})
                   //  alert(data.length))

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

    showImages=(pr_id)=>{
     console.log(pr_id);
        fetch('http://localhost:8080/get/'+pr_id)
         .then(response => response.json())    
        .then(data => { this.setState({myImage:'data:image/jpeg;base64,'+data.picBytes})                            
           console.log(this.state.myImage);         
        });
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
                    <td>Facillities</td>
                    {/*<td>Show Images</td>*/}
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
                               {/* <td><button className="btn btn-danger" onClick={()=>this.showImages(obj.pr_id)}>Show</button></td>*/}
                                <td><button className="btn btn-danger" id={obj.pr_id+"_"+obj.rent+"_"+obj.brokerage} onClick={this.cart}>Finalize</button></td>
                            </tr>
                        )
                    }
                )
                }
                </tbody>
            
        </table>
        <div>
        <img src={this.state.myImage}/>
        </div>
    </div>
            
        )
    }
}