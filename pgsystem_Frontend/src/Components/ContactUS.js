import React from "react";

export default class Contact extends React.Component
{
    constructor(props)
    {
        super(props);
    }
    render(){
    return(
        <div class="row align-items-top">
            <div class='col'>
            <h1><b>Contact Us At:</b></h1>
          <h3>Email ID: admin@pgrental.com</h3>
          <h3>Contact no: 999 555 6325</h3>
          </div>
          
          <div class='col'>
          <iframe src="https://giphy.com/embed/WRWhpaxjDax7PzWkzG" width="520" height="480" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/anniecash-real-estate-annie-cash-WRWhpaxjDax7PzWkzG">via GIPHY</a></p>
          </div>
        </div>
    );
    }
}
