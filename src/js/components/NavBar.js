import React from "react";
import {pages} from "./resources/pages";
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
        return true;
      case "About":
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

    const links = pages.map((page) =>
      <li key={page.title} class={() => this.getActiveState(page.title) + "navbar-main-link"}><a href={ baseUrl + page.url }>{page.title}</a></li>
    );

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
              <ul class="nav navbar-nav">
                {links}

              </ul>
              <ul class="nav navbar-nav navbar-right">
                <li><i class="fa fa-facebook-official social-media-link" aria-hidden="true"></i></li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
      </div>
    );
  }
}
