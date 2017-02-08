import React from "react";
import MobileLinkRow from "./MobileMenu/MobileLinkRow";

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
    if(this.props.historyStrategy) {
      this.setState({...this.state, historyStrategy: this.props.historyStrategy});
    }
  }

  render() {

    //Change link and href base url based on history strategy passed in as a property
    var baseUrl = "/";
    if(this.state.historyStrategy == "hash") {
      baseUrl = "#/";
    }

    var linkRowHeight = (Math.floor(100 / pages.length)-3).toString() + "%";

    var linkRowStyle = {
      height: linkRowHeight,
    }

    const links = pages.map((page) =>
      <MobileLinkRow key={page.title} page={page} style={linkRowStyle} baseUrl={baseUrl} onClick={this.props.mobileToggle} ></MobileLinkRow>
    );

    console.log(links);

    return (
      <div id="MobileMenu" class={this.state.style}>
        {links}
      </div>
    );
  }
}
