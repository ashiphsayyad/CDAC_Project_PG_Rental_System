import React  from "react";
import mystore  from './store';
export default class Payment extends React.Component
{
  constructor(props)
  {
    super(props);
    this.state={
         CardNumber:"",
         CardHolder:"",
         cvv:"",
         errors:{
           CardNumberError:"",
           CardHolderError:"",
           cvvError:"",
         },
         validCardNumber:false,
         validCardHolder:false,
         validcvv:false,
         validForm:false,
        

    };
  }
  logout=()=>{
    mystore.dispatch({type:'LOGGEDOUT'});
    localStorage.removeItem("loggedinuser");
    this.props.history.push("/");
    }
/*  handleChange=(e)=>{
    const CardNumberRegex=/^[0-9]+$/;
    const CardHolderRegex=/^[A-Za-z]+$/;
    const cvvRegex=/^[0-9] {3}/;
    const input =e.target;
    const nm=input.name;
    const value=input.value;
    let errors=this.state.errors;
    let CardNumberFlag=this.state.validCardNumber;
    let CardHolderFlag=this.state.validCardHolder;
    let cvvFlag=this.state.validcvv;
    switch(nm)
    {
      case 'CardNumber':
        if(!CardNumberRegex.test(value))
        {
          errors.CardNumberError="Invalid CardNumber";
          CardNumberFlag=false;
        }
        else{
          CardNumberFlag=true;
        }
        break;

        case 'CardHolder':
          if(!CardHolderRegex.test(value))
          {
            errors.CardHolderError="Invalid CardHolder";
            CardHolderFlag=false;
          }
          else{
            CardHolderFlag=true;
          }
          break;

          case 'cvv':
          if(!cvvRegex.test.test(value))
          {
            errors.cvvError="Invalid cvv";
            cvvFlag=false;
          }
          else{
            cvvFlag=true;
          }

         
          }
    
  }*/
  showMsges=(e)=>{console.log(this.state);}
  submitPayment=(e)=>{e.preventDefault();
                   alert("Payment Successfully Done!!");
                   this.props.history.push("/");
                    console.log(this.state);}

  
  render()
  {
    return(
         <div className="container">
           <div className="window">
             <div className="order-info">

               <div className="order-info-content">
                    <h2 style={{fontFamily:'initial'}}><i><b>Order Summary</b></i></h2>

                    <div class='credit-info'>
                       <div class='credit-info-content'>
                         <table class='half-input-table'>
                      <tr>
                     <td>Please select your card:</td>
                <td>
                  <div class='dropdown' id='card-dropdown'>
                  
                <div class='dropdown-select'>
                  <ul>
                  <select class="dropdown" style={{ backgroundColor:'ActiveCaption',fontFamily:'cursive' }}>
                     <option selected>credit and debit cards</option>
                     <option value="1">Master Card</option>
                     <option value="2">Visa</option>
                     <option value="2">Rupay</option>
                  </select>
                  </ul>
                </div>
           </div>
               </td>
               </tr>
            </table>
         </div>
            <img src='https://dl.dropboxusercontent.com/s/ubamyu6mzov5c80/visa_logo%20%281%29.png' height='80' class='credit-card-image' id='credit-card-image'></img>
            Card Number:
            <input className='input-field'  style={{backgroundColor:'whitesmoke'}} required maxLength="16" placeholder="number"></input>
            Card Holder:
            <input className='input-field'  style={{backgroundColor:'whitesmoke'}} required maxLength="30" placeholder="name"></input>
            <table  className='half-input-table'>
              <tr>
                <td> Expires:
                  <td className="dropdown">
                    <form  action=" ">
                    <select name='expireMM' id='expireMM' style={{fontFamily:'monospace',backgroundColor:'ActiveBorder'}}>
                       <option value=''>Month</option>
                      <option value='01'>January</option>
                      <option value='02'>February</option>
                      <option value='03'>March</option>
                      <option value='04'>April</option>
                      <option value='05'>May</option>
                     <option value='06'>June</option>
                     <option value='07'>July</option>
                     <option value='08'>August</option>
                     <option value='09'>September</option>
                     <option value='10'>October</option>
                      <option value='11'>November</option>
                     <option value='12'>December</option>
                  </select> 
              <select name='expireYY' id='expireYY' style={{fontFamily:'monospace',backgroundColor:'ActiveBorder'}}s>
                    <option value=''>Year</option>
                    <option value='20'>2020</option>
                    <option value='21'>2021</option>
                    <option value='22'>2022</option>
                    <option value='23'>2023</option>
                    <option value='24'>2024</option>
             </select> 
            </form>
          
                  </td>
                </td>
                <td>CVV
                  <input className='input-field' name="cvv" style={{backgroundColor:'whitesmoke'}} required maxLength="3" ></input>
                </td>
              </tr>
            </table>
            <button className='pay-btn' type="submit"  style={{backgroundColor:'green', fontFamily:'cursive',fontSize:'100%'}} onClick={this.submitPayment} ><b >CHECKOUT</b></button>
                     
               </div>
        
             </div>

           </div>

         </div>
        </div>
    )
  }
}
