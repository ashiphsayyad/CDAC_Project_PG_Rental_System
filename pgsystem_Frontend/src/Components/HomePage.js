import React from "react";


export default class Home extends React.Component
{
    constructor(props) {
        super(props);
        this.state = {
            list_property: [],
            selectedcity:"",
            selectedarea:"",
            
        }    
   }
   handleChnage=(e)=>{
    e.preventDefault();
    const input=e.target;
    const nm=input.name;
    const val=input.value;
    console.log(val);
    this.setState({[nm]:val});
}
  submitList = (e) =>{
      e.preventDefault();
    const city=this.state.selectedcity;
    const area=this.state.selectedarea;
    const url="http://localhost:8080/getByLoc?city="+city+"&area="+area;
    fetch(url)
    .then(resp => resp.json())
    .then(data => {this.setState({list_property:data});
            console.log(data)})
           


} 


    render(){
        const list=this.state.list_property;
        console.log(list)
        if(list.length==0)
        {
            
        
    return(
        
      <div class="row align-items-center">
     <div class="row">
        <div class="col" style={{color:'black',fontSize:'30px'}}><b>About Us</b>
        <div class="col" class=" clearfix" style={{textAlign:'start',fontFamily:'serif',paddingBottom:'60px',fontSize:'25px',}}><p >We are a group of students resolving a problem faced by
                the students working individuals like us 
                in finding pg/flats on rental basis.</p>
        </div>
       
    </div>
        <div class="col">
            <center>
           <form class="row align-items-center">
               <div class="row align-items-center">
                 <h2 style={{color:'black',fontSize:'30px'}}><b>Search here!!!</b></h2>
                 <label style={{color:'lightcoral'}} for="city"  style={{textAlign:'left'}}><b>Select City:</b></label>        
                <div class="mb-3">
                    <select class="form-select" required aria-label="select example" name="selectedcity" onChange={this.handleChnage}>
                    <option selected disabled value="">select City</option>
                    <option value="pune">Pune</option>
                    <option value="mumbai">Mumbai</option>
                    <option value="nashik">Nashik</option>
                    <option value="ahmedabad">Ahmedabad</option>
                    </select>
                    <div class="invalid-feedback">Please select City</div>
                </div>
                 <label style={{color:'lightcoral'}} for="area"  style={{textAlign:'left'}}><b>Select Area:</b></label>        
                <div class="mb-3">
                    <select class="form-select" required aria-label="select example" name="selectedarea" onChange={this.handleChnage}>
                    <option selected disabled value="" >select Area</option>
                    <option value="deccan">Pune-Deccan</option>
                    <option value="hinjewadi">Pune-Hinjewadi</option>
                    <option value="kothrud">Pune-Kothrud</option>
                    <option value="karvenagar">Pune-Karve Nagar</option>
                    <option value="shivajinagar">Pune-Shivaji Nagar</option>
                    <option value="vileparle">Mumbai-Vile Parle</option>
                    <option value="andherieast">Mumbai-Andher East</option>
                    <option value="andheriwest">Mumbai-Andheri West</option>
                    <option value="juhu">Mumbai-Juhu</option>
                    <option value="gangapurroad">Nashik-Gangapur Road</option>
                    <option value="collegeroad">Nashik-College Road</option>
                    <option value="mahatmanagar">Nashik-Mahatma Nagar</option>
                    <option value="ashoknagar">Nashik-Ashok Nagar</option>
                    <option value="thaltej">Ahmedabad-Thaltej</option>
                    <option value="bopal">Ahmedabad-Bopal</option>
                    <option value="sghighway">Ahmedabad-SG Highway</option>
                    <option value="motera">Ahmedabad-Motera</option>
                    <option value="ladldarwaja">Ahmedabad-Lal Darwaja</option>
                    </select>
                  <div class="invalid-feedback">Please select Area</div>
                </div>
                 
                   <div>
                      <button type="submit"  className="btn btn-success"value='submit' onClick={this.submitList}><b>SUBMIT</b></button>
                   </div>
                 </div>
          </form>
          </center>
          </div>
      </div>
      
      
     </div>
        );
    }
    else{
        return(
        
            <div class="row align-items-center">
           <div class="row">
              <div class="col" style={{color:'black',fontSize:'30px'}}><b>About Us</b>
              <div class="col" class=" clearfix" style={{textAlign:'start',fontFamily:'serif',paddingBottom:'60px',fontSize:'25px',}}><p >We are a group of students resolving a problem faced by
                the students working individuals like us 
                in finding pg/flats on rental basis.</p>
            </div>
             
          </div>
              <div class="col">
                  <center>
                 <form class="row align-items-center">
                     <div class="row align-items-center">
                       <h2 style={{color:'black',fontSize:'30px'}}><b>Search here!!!</b></h2>
                       <label style={{color:'lightcoral'}} for="city"  style={{textAlign:'left'}}><b>Select City:</b></label>        
                      <div class="mb-2">
                          <select class="form-select" required aria-label="select example" name="selectedcity" onChange={this.handleChnage}>
                          <option selected disabled value="">select City</option>
                          <option value="pune">Pune</option>
                          <option value="mumbai">Mumbai</option>
                          <option value="nashik">Nashik</option>
                          <option value="ahmedabad">Ahmedabad</option>
                          </select>
                          <div class="invalid-feedback">Please select City</div>
                      </div>
                       <label style={{color:'lightcoral'}} for="area"  style={{textAlign:'left'}}><b>Select Area:</b></label>        
                      <div class="mb-2">
                          <select class="form-select" required aria-label="select example" name="selectedarea" onChange={this.handleChnage}>
                          <option selected disabled value="" >select Area</option>
                          <option value="deccan">Pune-Deccan</option>
                          <option value="hinjewadi">Pune-Hinjewadi</option>
                          <option value="kothrud">Pune-Kothrud</option>
                          <option value="karvenagar">Pune-Karve Nagar</option>
                          <option value="shivajinagar">Pune-Shivaji Nagar</option>
                          <option value="vileparle">Mumbai-Vile Parle</option>
                          <option value="andherieast">Mumbai-Andher East</option>
                          <option value="andheriwest">Mumbai-Andheri West</option>
                          <option value="juhu">Mumbai-Juhu</option>
                          <option value="gangapurroad">Nashik-Gangapur Road</option>
                          <option value="collegeroad">Nashik-College Road</option>
                          <option value="mahatmanagar">Nashik-Mahatma Nagar</option>
                          <option value="ashoknagar">Nashik-Ashok Nagar</option>
                          <option value="thaltej">Ahmedabad-Thaltej</option>
                          <option value="bopal">Ahmedabad-Bopal</option>
                          <option value="sghighway">Ahmedabad-SG Highway</option>
                          <option value="motera">Ahmedabad-Motera</option>
                          <option value="ladldarwaja">Ahmedabad-Lal Darwaja</option>
                          </select>
                        <div class="invalid-feedback">Please select Area</div>
                      </div>
                       
                         <div>
                            <button type="submit"  className="btn btn-success"value='submit' onClick={this.submitList}><b>SUBMIT</b></button>
                         </div>
                       </div>
                </form>
                </center>
                </div>
            </div>
            
            <div disabled={!this.submitList}>
                  <h1 className = "text-center" >Property List</h1>
                  <table className = "table table-striped table-dark"  >
                      <thead>
                          <tr style={{fontSize:'18px',border:'2px solid yellowgreen',fontFamily:'serif',backgroundColor:"ActiveBorder"}}  class="p-3 mb-2 bg-primary text-white" >
                      
                          <td>Property ID</td>
                          <td>Property Type</td>
                          <td>User</td>
                          <td>Rent</td>
                          <td>Brokerage</td>
                          <td>Facillities</td>
      
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
                                      <td>{obj.user}</td>
                                      <td>{obj.rent}</td>
                                      <td>{obj.brokerage}</td>
                                      <td>{obj.facilities}</td>
                                  </tr>
                              )
                          }
                      )
                      }
                      </tbody>
                  
              </table>
                  </div>
           </div>
              );
    }
    }
}
