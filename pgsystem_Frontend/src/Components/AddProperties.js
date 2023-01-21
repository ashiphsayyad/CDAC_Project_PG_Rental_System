import React from 'react';
import './User-Reg.css';

export default class AddProperties extends React.Component{

    constructor(props)
    {
        super(props);
        this.state={
            lid:0,
            errors:{
                rentError:"",
                brokerError:""
            },
            validRent:false,
            validBrokerage:false,
            validForm:false,
           pr_type:{
                flat:"",
                pg:""
            },
            area:{
                deccan:"",
                kothrud:"",
                karvenagar:"",
                shivajinagar:"",
                vileparle:"",
                andherieast:"",
                andheriwest:"",
                juhu:"",
                gangapurroad:"",
                collegeroad:"",
                mahatmanagar:"",
                ashoknagar:"",
                thaltej:"",
                bopal:"",
                sghighway:"",
                motera:"",
                laldarwaja:""
            },
            city:{
                pune:"",
                mumbai:"",
                nashik:"",
                ahmedabad:"",
            },
            user:{
                male:"",
                female:"",
            },
            rent:0,
            brokerage:0.0,
              
            facilities:"",
            
        
        };
        
        
    }
    handleChnage=(e)=>{
        e.preventDefault();
        const rentRegex=/[0-9]{3,4}[0-9]{0,3}\d/;
        const brokerRegex=/[0-5]/;
        const input=e.target;
        const nm=input.name;
        const val=input.value;
        let errors=this.state.errors;
        let rentFlag=this.state.validRent;
        let brokerFlag=this.state.brokerage;
        switch(nm)
        {
            case 'rent':
                if(!rentRegex.test(val))
                {
                    errors.rentError="Invalid Rent";
                    rentFlag=false;
                }
                else{
                    rentFlag=true;
                }
                break;
            case 'brokerage':
                if(!brokerRegex.test(val))
                {
                    errors.brokerError="Invalid Brokerage";
                    brokerFlag=false;
                }
                else{
                    brokerFlag=true;
                }
                break;
        }
       
        this.setState({errors,[nm]:val,validRent:rentFlag,validBrokerage:brokerFlag},()=>{this.setState({validForm:this.state.validRent && this.state.validBrokerage})});
    }

    submitForm=(e)=>{
        e.preventDefault();
        alert("Form is submitted");
        console.log(this.state);
        const data={
            method:'POST',
            headers:{
                'Content-Type':"application/json"
            },
            body:JSON.stringify({
                pr_type:this.state.pr_type,
                area:this.state.area,
                city:this.state.city,
                user:this.state.user,
                rent:this.state.rent,
                brokerage:this.state.brokerage,
                facilities:this.state.facilities
            }),
        }
        const lid=JSON.parse(localStorage.getItem("loggedlandlord")).lid;
        const url="http://localhost:8080/save?lid="+lid;
        fetch(url,data)
            .then(res=>{res.json()
                if(res.status==200)
                {
                    alert("Property Saved");
                    this.props.history.push("/landlordDashboard");
                }
                else
                {
                    alert("failed to add Property");
                }
            });
        
    }




    render(){
        return(
            <div className="container-fluid" >
            <h2 style={{color:'none'}}> Please Fill the below Details</h2>
           
            
            <form className="RegForm" style={{padding: '50px 50px 50px 50px',
    margin: '100px  300px 100px 300px'}}>

                {/*<div className="form-group"style={{visibility:'hidden'}} >
                    <label  style={{color:'lightcoral'}} for="lid" style={{textAlign:'left'}}><b>Id:</b></label>
                    <input type="number" id="lid" ref="lid" value={} onChange={this.handleChnage} name="lid" className="form-control" ></input>
        </div>*/}

            <div className="form-group">
                <label style={{color:'lightcoral'}} for="pr_type" style={{textAlign:'left'}}><b>Property Type:</b></label>        
                <div class="mb-3">
                    <select class="form-select" required aria-label="select example" name="pr_type" onChange={this.handleChnage}>
                    <option selected disabled value="">select Property type</option>
                    <option value="flat">Flat</option>
                    <option value="pg" >Paying Guest</option>
                    </select>
                    <div class="invalid-feedback">Please select a valid state.</div>
                </div>
                <label style={{color:'lightcoral'}} for="city" style={{textAlign:'left'}}><b>Select City:</b></label>        
                <div class="mb-3">
                    <select class="form-select" required aria-label="select example" name="city" onChange={this.handleChnage}>
                    <option selected disabled value="">select City</option>
                    <option value="pune">Pune</option>
                    <option value="mumbai">Mumbai</option>
                    <option value="nashik">Nashik</option>
                    <option value="ahmedabad">Ahmedabad</option>
                    </select>
                    <div class="invalid-feedback">Please select City</div>
                </div>

                <label style={{color:'lightcoral'}} for="area" style={{textAlign:'left'}}><b>Select Area:</b></label>        
                <div class="mb-3">
                    <select class="form-select" required aria-label="select example" name="area" onChange={this.handleChnage}>
                    <option selected disabled value="" >select Area</option>
                    <option value="deccan">Pune-Deccan</option>
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

                


                <label style={{color:'lightcoral'}} for="user" style={{textAlign:'left'}}><b>Select User:</b></label>        
                <div class="mb-3">
                    <select class="form-select" required aria-label="select example" name="user" onChange={this.handleChnage}>
                    <option selected disabled value="">select User</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    </select>
                    <div class="invalid-feedback">Please select User</div>
                </div>
              
              
                <div className="form-group">
                    <label style={{color:'lightcoral'}} for="rent" style={{textAlign:'left'}}><b>Enter Rent:</b></label>
                    <input type="number" id="rent" minLength="4" ref="rent"  name="rent" className="form-control" onChange={this.handleChnage} ></input>

                </div>


                <div className="form-group">
                    <label style={{color:'lightcoral'}} for="brokerage" style={{textAlign:'left'}}><b>Brokerage:</b></label>
                    <input type="number" id="brokerage" ref="brokerage"  name="brokerage" className="form-control" onChange={this.handleChnage} ></input>

                </div>
        
                <div className="form-group">
                    <label style={{color:'lightcoral'}} for="facilities" style={{textAlign:'left'}}><b>Facilities Available:</b></label> 
                    <input type="text" id="facilties" ref="facilities"  name="facilities" className="form-control" onChange={this.handleChnage} ></input>
                </div>


                <br/>

            </div>


            
            

            <button type="submit" disabled={!this.state.validForm} className="btn btn-dark btn-lg btn-block"  onClick={this.submitForm} value="addproperty"><b>Submit Property</b></button>
            
            </form>
          
        </div>
        )
        
        
    }
}