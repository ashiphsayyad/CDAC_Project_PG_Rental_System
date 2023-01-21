import React from "react";
import mystore from "./store";


export default class ImageUpload extends React.Component{

    
  constructor(props) {
    super(props);
    this.state = {
      myImage: null,
     pr_id:0
    };

    this.onImageChange = this.onImageChange.bind(this);
  }

  onImageChange = event => {
    console.log("in change");
    if (event.target.files && event.target.files[0]) {
      let img = event.target.files[0]; 
      const data = new FormData();
      for (const file of event.target.files) {
        data.append('files[]', file, file.name);

      }
      data.append("pr_id",this.state.pr_id);
      console.log(data);
    
      fetch('http://localhost:8080/saveImages',
       {             
          method: 'POST',
          headers: {  
              'Accept': 'application/json',                           
        },            
        body: data            
        }).then(response => response.json())    
      .then(data => {                           
     // console.log(this.state.myImage); 
     mystore.dispatch({type: 'LOGGEDIN'});
     this.props.history.push("/landlordDashboard");        
      });
      event.preventDefault();


    }

  };

  handleChange=(e)=>{
    e.preventDefault();
    const input=e.target;
    const nm=input.name;
    if(nm=="myImage")
    {
      if (e.target.files && e.target.files[0])
      {
        this.setState({[nm]:e.target.file[0]});
      }
      
    }
    else{
    const val=input.value;
    console.log(val);
    this.setState({[nm]:val});
    console.log(nm);
    }
    

  }
    render () {
        return(
            <div className="container-fluid">
                <img src={this.state.myImage} />
                <form className="RegForm" encType="multipart/form-data" style={{padding: '50px 150px 50px 150px',
    margin: '100px  400px 100px 400px'}}>
                    <div className="form-group">
                    <label style={{color:'crimson'}} for="pr_id" style={{textAlign:'left'}}><b>Pr_id:</b></label>
                        <input type="number" ref="pr_id"  name="pr_id" onChange={this.handleChange} />
                    </div>
                    <div className="form-group">
                    <label style={{color:'crimson'}} style={{textAlign:'left'}}><b>Select Images:</b></label>
                        <input type="file"  name="myImage"  onChange={this.onImageChange}  multiple/>
                    </div>
                    
                   

                </form>

            </div>
        )
    }
}