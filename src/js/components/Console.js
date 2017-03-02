import React from "react";

import ControlPanel from "./Console/ControlPanel";

export default class ComponentName extends React.Component {

  constructor() {
    super();

    this.state = {
      loggedIn: "true",
      user: "",
    };
  }

  handleLoginBtn = () => {
    var username = document.getElementById('usernameInput').value;
    var password = document.getElementById('passwordInput').value;

    if(password == "password") {
      this.setState({...this.state, loggedIn: "true", user: username});
    }



  }

  handleLogoutBtn = () => {
    this.setState({...this.state, loggedIn: "false", user: ""});
  }




  render() {

    const loginForm = (
      <form class="form form-inline" style={{display: "flex", flexDirection: "row", justifyContent: "space-between", fontSize: "18px", width: "37%", color: "black"}}>
        <input type="text" id="usernameInput" placeholder="Username" />
        <input type="password" id="passwordInput" placeholder="password" />
        <button class="btn" onClick={this.handleLoginBtn}>Login</button>
      </form>
    );

    const welcomePromt = (<h1>Welcome {this.state.user} <button class="btn" onClick={this.handleLogoutBtn}>Logout</button></h1>);

    var displayPromt = loginForm;

    if(this.state.loggedIn ==  "true") {
      displayPromt = welcomePromt;
    }

    var content = (<h1>Menu</h1>);

    if(this.state.loggedIn == "true") {
      content = (
        <ControlPanel></ControlPanel>

      );
    }


    return (
      <div style={{marginTop: "80px"}}>
        <div class="panel">
          <div class="panel-green panel-heading panel-lg-text" style={{display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between"}}>
            <h1>Welcome to the SMT Console!</h1>
            {displayPromt}
          </div>

          <div class="panel-body">
            {content}
          </div>
        </div>
      </div>
    );
  }
}
