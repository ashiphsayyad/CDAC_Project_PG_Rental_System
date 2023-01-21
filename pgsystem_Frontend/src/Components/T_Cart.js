import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
//import Cart from './T_Cart'
import mystore  from './store';

class T_Cart extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
         
           getresult:{
            oid:0,
            prid:0,
            rent:0,
            brokerage:0.0,
            status:0,
            total_amt:0.0,
           },
           
           tid:JSON.parse(localStorage.getItem("loggedtenant")).tid
        }
    }

  
    logout=()=>{
        mystore.dispatch({type:'LOGGEDOUT'});
        localStorage.removeItem("loggedinuser");
        this.props.history.push("/");
        }


    componentDidMount = (e) => {
       
        const tid=this.state.tid;
        console.log(tid);
        const url="http://localhost:8080/getTr?tid="+tid;
        fetch(url)
            .then(resp => resp.json())
            .then(data => {this.setState({ getresult: data });
                console.log(this.state.getresult)});
    }
    remove=(oid)=>{
        fetch("http://localhost:8080/deleteTr/"+oid)
        .then(resp=>
            {
                if(resp.status==200)
                {
                    this.props.history.push("/t_props");
                }
            }
        );

        }
 

    pay =()=>{
        mystore.dispatch({type: 'LOGGEDIN'});
        this.props.history.push("/pay");
    }
   

    render() {
        const cartlist=this.state.getresult;
        console.log(cartlist);
    
        return (
            <div >
                <table class="table table-striped table-dark">
                       <thead>
                         <tr style={{color:'yellowgreen', fontSize:"25px",fontFamily:"serif"}}>
                           <th >Order_Id</th>
                           <th>Property_Id</th>     
                           <th >Rent</th>
                           <th >Brokerage</th>
                           <th >Status</th>
                           <th >TotalAmount</th>
                           <th colSpan="2" style={{textAlign:'center'}}>Action</th>
                        </tr>
                  </thead>
                   <tbody>
                                    <tr>
                                        <td> {this.state.getresult.oid} </td>
                                        <td> {this.state.getresult.prid} </td>
                                        <td> {this.state.getresult.rent}</td>
                                        <td> {this.state.getresult.brokerage}</td>
                                        <td> {this.state.getresult.status}</td>
                                        <td>{this.state.getresult.total_amt}</td>  
                                        <td><button className="btn btn-danger" onClick={this.pay} style={{textDecorationLine:"none",color:'slategrey'}}><b>Payment</b></button></td>
                                        <td><button className="btn btn-danger"  onClick={()=>this.remove(this.state.getresult.oid)} style={{textDecorationLine:"none",color:'slategrey'}}><b>Remove</b></button></td>
                                    </tr>
                                    
                                    </tbody>
                              
                            
                     
                    </table>

                </div>
        )
    }

    }


export default T_Cart;