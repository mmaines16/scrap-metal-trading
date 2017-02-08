import React from "react";

import Banner from "./common/Banner";

export default class Home extends React.Component {
  render() {

    var backgroundStyles = {
      backgroundImage: "url('/img/people-coffee-notes-tea.jpg')",
      backgroundRepeat: "no-repeat",
      backgroundAttachment: "fixed",
      backgroundPosition: "center",
      position: "absoulute",
    }

    return (
      <div>
        <Banner style={backgroundStyles} bannerImg="/img/people-coffee-notes-tea.jpg">
          <div class="row">
            <div class="col-sm-offset-3 col-sm-6" style={{textAlign: "center"}}>
              <h1>HOME</h1>
            </div>
          </div>
        </Banner>
      </div>
    );
  }
}
