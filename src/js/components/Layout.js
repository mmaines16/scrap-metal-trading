import React from "react";
import ReactDOM from "react-dom";

import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import NavBar from "./NavBar";
import MobileMenu from "./MobileMenu";

export default class ComponentName extends React.Component {
  constructor() {
    super();

    this.state = {
      mobileMenuOn: false,
      currentPage: "<div><h1>Content</h1></div>",
      style: "fade-enter",
    };
  }

  mobileMenuToggle = () => {
    switch(this.state.mobileMenuOn) {
      case false:
        this.setState({...this.state, mobileMenuOn: true, style: "fade-enter fade-enter-active"});
        break;
      case true:
        this.setState({...this.state, mobileMenuOn: false, style: "fade-leave"});
        break;
    }

  }

  componentWillUpdate() {
    this.render();
  }

  render() {

    var currentPage = this.state.currentPage;
     switch (this.state.mobileMenuOn) {
       case true:
         currentPage = <MobileMenu key={this} links="" class={this.state.style}/>
         break;
       case false:
         currentPage = <div key="div"><h1>Content</h1></div>
         break;
     }


    return (
      <div>
        <NavBar mobileToggle={this.mobileMenuToggle} links="" />
          <ReactCSSTransitionGroup
            transitionName="fade"
            transitionEnterTimeout={300}
            transitionLeaveTimeout={100}>

              {currentPage}

          </ReactCSSTransitionGroup>
      </div>
    );

  }
}
