import React from "react";

import Banner from "./common/Banner";

export default class Home extends React.Component {
  render() {

    var backgroundStyles = {
      backgroundImage: "url('/img/people-coffee-notes-tea.jpg')",
      backgroundRepeat: "no-repeat",
      backgroundAttachment: "fixed",
      backgroundPosition: "50% 100px",
      position: "absoulute",
    }

    return (
      <div id="home">
        <Banner style={backgroundStyles} bannerImg="/img/people-coffee-notes-tea.jpg" imgScroll="true">
          <div class="row">
            <div class="col-sm-offset-3 col-sm-6" style={{textAlign: "center", postion: "relative"}}>
              <span>HOME</span>
            </div>
          </div>
        </Banner>
      </div>
    );
  }
}
