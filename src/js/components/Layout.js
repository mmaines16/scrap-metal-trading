import React from "react";
import ReactDOM from "react-dom";
import {Router, Route, hashHistory} from "react-router";

import Home from "./Home";
import About from "./About";

import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import NavBar from "./NavBar";
import MobileMenu from "./MobileMenu";

export default class ComponentName extends React.Component {
  constructor() {
    super();

    this.router = <Router history={hashHistory}>
                        <Route path="/" component={Home} />
                        <Route path="/about" component={About} />
                      </Router>;

    this.currentPage = this.router;



    this.state = {
      mobileMenuOn: false,
      currentPage: this.currentPage,
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
         currentPage = this.router;
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
