import React from "react";
import ReactDOM from "react-dom";
import {Router, Route, hashHistory, browserHistory} from "react-router";

import Home from "./Home";
import About from "./About";
import Console from "./Console";

import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import NavBar from "./NavBar";
import MobileMenu from "./MobileMenu";

export default class ComponentName extends React.Component {
  constructor() {
    super();

    //-----Quickly switch history strategy across the entire app-------
    var strategies = ["hash", "browser"];

    var historyStrategy = strategies[0];

    var strategy = hashHistory;

    if(historyStrategy == "browser") {
      strategy = browserHistory;
    }
    //------------------------------------------------------------------

    this.router = <Router history={ strategy }>
                        <Route path="/" component={Home} />
                        <Route path="/about" component={About} pathName="About"/>
                        <Route path="/console" component={Console}/>
                        <Route path="*" component={Home} />
                      </Router>;

    this.currentPage = this.router;



    this.state = {
      mobileMenuOn: false,
      currentPage: this.currentPage,
      style: "fade-enter",
      historyStrategy: historyStrategy,
    };
  }

  mobileMenuToggle = () => {

    console.log("Mobile Menu Toggle");
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
    console.log(this.props);
  }

  render() {

    var currentPage = this.state.currentPage;
     switch (this.state.mobileMenuOn) {
       case true:
         currentPage = <MobileMenu key={this} links="" class={this.state.style}
                                  mobileToggle={this.mobileMenuToggle}
                                  historyStrategy={this.state.historyStrategy}/>
         break;
       case false:
         currentPage = this.router;
         break;
     }


    return (
      <div>
        <NavBar mobileToggle={this.mobileMenuToggle} historyStrategy={this.state.historyStrategy} />
          <ReactCSSTransitionGroup
            transitionName="fade"
            transitionEnterTimeout={300}
            transitionLeaveTimeout={100}>

            <div style={{marginTop: "50px",}}>
              {currentPage}
            </div>


          </ReactCSSTransitionGroup>
      </div>
    );

  }
}
