import React from "react";
import {pages} from "./resources/pages";
import {socialMediaLinks} from "./resources/socialMediaLinks";
import InfoNavBar from "./InfoNavBar";

export default class NavBar extends React.Component {

  constructor() {
    super();

    console.log(pages);

    this.state = {
      activeLink: "Home",
      historyStrategy: "hash",
    };
  }

  onLinkClick = (pageTitle) => {
    this.setState({...this.state, activeLink: pageTitle});
  };

  getActiveState = (pageTitle) => {
    switch(pageTitle) {
      case "Home":
        if (this.state.activeLink=="Home")
          return true;
        else
          return false;
      case "About":
        if (this.state.activeLink=="About")
          return true;
        else
          return false;
      default:
        return false;
    }
  };

  componentDidMount() {
    //set state property based on history strategy passed in as a property
    if(this.props.historyStrategy) {
      this.setState({...this.state, historyStrategy: this.props.historyStrategy});
    }
  }

  render() {
    console.log(this.state);

    //Change link and href base url based on history strategy passed in as a property
    var baseUrl = "/";
    if(this.state.historyStrategy == "hash") {
      baseUrl = "#/"
    }

    const links = pages.map((page) => {
        return  <li key={page.title} class={this.state.activeLink==page.title ? "active": ""} onClick={() => {this.onLinkClick(page.title)}}>
                  <a href={ baseUrl + page.url }>{page.title}</a>
                </li>
    });

    const mediaLinks = socialMediaLinks.map((smLink) => {
      return <li><a href={smLink.url}> <i style={{fontSize: "30px",}} class={smLink.faClass} /></a></li>
    });

    return (
      <div>

      <header>

        <nav class="navbar navbar-default navbar-fixed-top">
          <InfoNavBar />
          <div class="container-fluid">
            <div class="navbar-header">
              <button type="button"
                class="navbar-toggle collapsed"
                data-toggle="collapse"
                data-target="#bs-example-navbar-collapse-1"
                aria-expanded="false"
                onClick={this.props.mobileToggle} >

                <span class="sr-only">Toggle navigation</span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>

              </button>
              <a class="navbar-brand" href="#">Brand</a>
            </div>

            <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
              <ul class="nav navbar-nav navbar-main-links">
                {links}

              </ul>
              <ul class="nav navbar-nav navbar-right">
                  <div class="mobile-social-media-links">
                    { mediaLinks }
                  </div>
              </ul>
            </div>
          </div>
        </nav>
      </header>
      </div>
    );
  }
}
