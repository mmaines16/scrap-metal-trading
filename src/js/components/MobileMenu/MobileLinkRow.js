import React from "react";

export default class MobileLinkRow extends React.Component {

  render() {

    if(this.props.type==="even") {
      return (
        <div class="row mobile-link-row">
          <div class="mobile-link mobile-link-long">

          </div>

          <div class="mobile-link mobile-link-short">

          </div>
        </div>
      );
    }
    else if(this.props.type==="single") {
      return (
        <div class="row mobile-link-row">
          <div class=" mobile-link mobile-link-full">

          </div>
        </div>
      );
    }
    else {
      return (
        <div class="row mobile-link-row">
          <div class=" mobile-link mobile-link-short">

          </div>

          <div class=" mobile-link mobile-link-long">

          </div>
        </div>
      );
    }

  }
}
