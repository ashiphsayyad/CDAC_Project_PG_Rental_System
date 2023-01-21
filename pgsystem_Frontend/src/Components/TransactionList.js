import React from "react";
import mystore from "./store";

export default class TransactionList extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            list_transaction: []
        }    
   }

   logout=()=>{
    mystore.dispatch({type:'LOGGEDOUT'});
    localStorage.removeItem("loggedinuser");
    this.props.history.push("/");
    }


    componentDidMount = () =>{
        fetch("http://localhost:8080/getAllTr")
        .then(resp => resp.json())
        .then(data => {this.setState({list_transaction:data});
                console.log(data)})

    } 



    render () {
        return(
            
            <div>
            <h1 className = "text-center" >Transactions</h1>
            <table className = "table table-striped table-dark" >
                <thead>
                <tr style={{fontSize:'18px',border:'2px solid yellowgreen',fontFamily:'serif',backgroundColor:"ActiveBorder"}}  class="p-3 mb-2 bg-primary text-white" >
                
                    <td>Order ID</td>
                    <td>Tenant ID</td>
                    <td>Property ID</td>
                    <td>Rent</td>
                    <td>Brokerage</td>
                    <td>Status</td>
                    <td>Total Amount</td>
                </tr>

            </thead>

                                 
                <tbody>
                {
                this.state.list_transaction.map(
                    obj=>{
                        return(
                            <tr class="bg-primary" style={{color:'white'}}> 
                                <td>{obj.oid}</td>
                                <td>{obj.tid}</td>
                                <td>{obj.prid}</td>
                                <td>{obj.rent}</td>
                                <td>{obj.brokerage}</td>
                                <td>{obj.status}</td>
                                <td>{obj.total_amt}</td>
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