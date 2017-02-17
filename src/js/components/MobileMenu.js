import React from "react";
import MobileLinkRow from "./MobileMenu/MobileLinkRow";
import MobileSocialMediaRow from "./MobileMenu/MobileSocialMediaRow";

import {pages} from "./resources/pages";

export default class MobileMenu extends React.Component {
  constructor() {
    super();

    this.state = {
      style: "fade-enter container",
      historyStrategy: "hash",
    };
  }

  componentDidMount() {

    console.log(this.props.className);

    if(this.props.historyStrategy) {
      this.setState({...this.state, historyStrategy: this.props.historyStrategy});
    }
    if(this.props.className) {
      console.log("setting style props");
      console.log(this.props.className);
      this.setState({...this.state, style: this.props.className});
    }
  }

  render() {

    console.log(this.state);

    //Change link and href base url based on history strategy passed in as a property
    var baseUrl = "/";
    if(this.state.historyStrategy == "hash") {
      baseUrl = "#/";
    }

    var linkRowHeight = (Math.floor(100 / (pages.length+1))-3).toString() + "%";

    var linkRowStyle = {
      height: linkRowHeight,
    }

    const links = pages.map((page) =>
      <MobileLinkRow key={page.title} page={page} style={linkRowStyle} baseUrl={baseUrl} onClick={this.props.mobileToggle} ></MobileLinkRow>
    );

    return (
      <div id="MobileMenu" class={this.state.style}>
        {links}
        <MobileSocialMediaRow style={linkRowStyle} />
      </div>
    );
  }
}
