import React from "react";
import MobileLinkRow from "./MobileMenu/MobileLinkRow";

import {TweenMax} from "gsap";

export default class ComponentName extends React.Component {
  constructor() {
    super();

    this.state = {
      style: "fade-enter"
    };
  }

  componentWillEnter(callback) {
    this.setState({
      style: "fade",
    });
  }

  componentWillLeave(callback) {
    const elem = this;
    TweenMax.fromTo(elem, 0.3, {y: 0, opacity: 1}, {y: -100, opacity: 0, onComplete: callback});
  }

  render() {
    const links = [];
    return (
      <div id="MobileMenu" class={this.state.style}>
        <MobileLinkRow type="even" link="" />
        <MobileLinkRow type="odd" link=""/>
        <MobileLinkRow type="single" link=""/>
      </div>
    );
  }
}
