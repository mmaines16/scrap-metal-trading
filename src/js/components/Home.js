import React from "react";

import Banner from "./common/Banner";
import MaterialTable from "./Home/MaterialTable";

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
        <Banner style={backgroundStyles} bannerImg="/img/scrap-metal-pile.jpg" imgScroll="true">
          <div class="row">
            <div class="col-sm-offset-3 col-sm-6" style={{textAlign: "center", postion: "relative"}}>
              <span onClick={() => {alert("Play Brand Video\nChange Me")}}><i class="fa fa-youtube-play" aria-hidden="true"></i></span>
            </div>
          </div>
        </Banner>

        <div class="well">
          <div class="container">
            <h2 class="welcome-header">Welcome to Scrap Metal Trading and Recycling</h2>

            <ul style={{listStyle: "none", fontSize: "20px", padding: "0px"}}>
              <li>
                <ul style={{listStyle: "none", display: "flex", flexDirection: "row"}}>
                  <li style={{marginRight: "10px"}}><img src="/img/award.png" /></li>
                  <li><span>We specialize in <strong>non-ferrous</strong> scrap metal recycling</span></li>
                </ul>
              </li>

              <li>
                <ul style={{listStyle: "none", display: "flex", flexDirection: "row"}}>
                  <li style={{marginRight: "10px"}}><img src="/img/award.png" /></li>
                  <li><span>We comply with all <strong>local</strong>, <strong>state</strong>, and <strong>federal</strong> environmental and waste disposal regulations.</span></li>
                </ul>
              </li>
            </ul>

            <p style={{display: "none"}}> Thank you to flaticon.com and Pixel Buddha for the award.png image!</p>


          </div>
        </div>

        <div class="panel panel-green">
          <div id="materialTableHeader" class="panel-heading container">
            <h2>RECYCLEABLE MATERIALS</h2>
              <h4>We Purchase All Grades of:</h4>

              <ul class="material-ul-basic">
                <li>Aluminum</li>
                <li>Copper</li>
                <li>Stainless Steel</li>
                <li>Insulated Wire</li>
                <li>PC Boards</li>
              </ul>
              <br/>
            <p>
              Below is a list of materials that can be recycled.
              *All items in <span style={{color: "red"}}>RED</span> need <strong>Proof of Ownership</strong>
            </p>
          </div>

          <div class="panel-body">
            <MaterialTable />
          </div>
        </div>
      </div>


    );
  }
}
