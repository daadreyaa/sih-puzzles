import React from 'react'

const defaultState = {
  name:null,
  email:null,
  password:null,
  username:null,
  nameError:null,
  emailError:null,
  passwordError:null,
  usernameError:null,
  }
  class CustomFormValidation extends React.Component{
    constructor(){
      super();
      this.state = defaultState;
      this.handleInputChange = this.handleInputChange.bind(this);
      }
      handleInputChange(event) {
      const target = event.target;
      var value = target.value;
      const name = target.name;
      this.setState({
      [name]: value
      });
      }
      validate(){
      let nameError = "";
      let emailError = "";
      let passwordError = "";
      let usernameError="";
      if(!this.state.name){
      nameError = "Name field is required";
      }
      const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
      if(!this.state.email || reg.test(this.state.email) === false){
      emailError = "Email Field is Invalid ";
      }
      if(!this.state.password){
      passwordError = "Password field is required";
      }
      if(!this.state.username){
        usernameError = "username field is required";
        }
      if(emailError || nameError || passwordError || usernameError){
      this.setState({nameError,emailError,passwordError,usernameError});
      return false;
      }
      return true;
      }
      submit(){
      if(this.validate()){
      console.warn(this.state);
      this.setState(defaultState);
      }
      }


      
    render(){
      return(
<>


        <div className="App">
          <div class="container-fluid ps-md-0">
              <div class="row g-0">
                <div class="d-none d-md-flex col-md-4 col-lg-6 bg-image"></div>
                <div class="col-md-8 col-lg-6">
                  <div class="login d-flex align-items-center py-5">
                    <div class="container">
                      <div class="row">
                        <div class="col-md-9 col-lg-8 mx-auto">
                          <h2 class="login-heading mb-4">Get Started</h2>
            
                          
                          <form>
                          <div class="form-floating mb-3">
                              <input type="text" className={"form-control " + (this.state.usernameError ? 'invalid' : '')} id="floatingInput" name='username' placeholder="john" value={this.state.username} onChange={this.handleInputChange} />
                              <label for="floatingInput">Username</label>
                              <span className="text-danger">{this.state.usernameError}</span>
                            </div>
                            <div class="form-floating mb-3">
                              <input type="email" className={"form-control " + (this.state.emailError ? 'invalid' : '')} id="floatingInput" name='email' placeholder="name@example.com" value={this.state.email} onChange={this.handleInputChange} />
                              <label for="floatingInput">Email address</label>
                              <span className="text-danger">{this.state.emailError}</span>
                            </div>
                            <div class="form-floating mb-3">
                              <input type="password" className={"form-control " + (this.state.passwordError ? 'invalid' : '')} id="floatingPassword" name="password" placeholder="Password" value={this.state.password} onChange={this.handleInputChange} />
                              <label for="floatingPassword">Password</label>
                              <span className="text-danger">{this.state.passwordError}</span>
                            </div>
                            
                            {/* <div class="form-check mb-3">
                              <input class="form-check-input" type="checkbox" value="" id="rememberPasswordCheck" />
                              <label class="form-check-label" for="rememberPasswordCheck">
                                Remember password
                              </label>
                            </div> */}
            
                            <div class="d-grid">
                              <button class="btn btn-lg btn-primary btn-login text-uppercase fw-bold mb-2" type="button" onClick={()=>this.submit()}>Register</button>
                              {/* <div class="text-center">
                                <a class="small" href="#">Forgot password?</a>
                              </div> */}
                            </div>
            
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
        </div>
        </>
 )  
}
}



export default CustomFormValidation;