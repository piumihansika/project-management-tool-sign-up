import React, { Component } from 'react';


class Signup extends Component{ 
  
  
  getDetails(e){
    e.preventDefault();
  
      const firstname=this.refs.inputfirstname.value;
      const lastname=this.refs.inputlastname.value;
      const useremail=this.refs.inputemail.value;
      const telephone=this.refs.inputtelephone.value;
      const password=this.refs.inputpassword.value;
      const confirmpassword=this.refs.inputconfirmpassword.value;
      console.log(firstname, lastname, useremail, telephone, password, confirmpassword);
  }
    
  render(){
        return(
           <form className="form-horizontal" id="signup" align="center" onSubmit={this.onSubmit} method="get" action="">
           <legend></legend>
              <fieldset >
                <div className="form-group" align="center">
                     <input type="text"
                      className="form-control" 
                      id="first" 
                      name="First Name"
                      placeholder="First Name" 
                      ref="inputfirstname"
                       />
                  </div>
                    <div className="form-group" align="center">
                      <input type="text"
                       className="form-control"   
                       id="last" 
                       name="Last Name" 
                       placeholder="Last Name"
                       ref="inputlastname"
                          />
                  </div>
                    <div className="form-group" align="center">
                      <input type="email" 
                      className="form-control"  
                      id="email" 
                      name="Email" 
                      placeholder="Email" 
                      ref="inputemail"
                        />
                  </div> 
                    <div className="form-group" align="center">
                      <input type="tel" 
                      className="form-control"  
                      id="phone" 
                      name="Phone Number" 
                      placeholder="Telephone number" 
                      ref="inputtelephone"
                        />
                  </div>  
                    <div className="form-group" align="center">
                      <input type="password" 
                      className="form-control"  
                      id="password" 
                      name="Password" 
                      placeholder="Password"  
                      ref="inputpassword"
                          />
                  </div>       
                    <div className="form-group" align="center">
                      <input type="password" 
                      className="form-control"   
                      id="confirm" 
                      name="Confirm password" 
                      placeholder="Confirm Password" 
                      ref="inputconfirmpassword"
                        />
                  </div>
                  </fieldset> 
                  <fieldset>
          <div className="signup-button">
        <button type="submit" className="btn-primary" id="signup-button" onClick={this.getDetails.bind(this)} >
          Sign Up
        </button>
      </div>
    </fieldset> 
  </form>
 

        );
    }
}

export default Signup;