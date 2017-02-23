import React from "react";

import Banner from "./common/Banner";

import {recycledMaterials} from "./resources/materials";

export default class Home extends React.Component {
  render() {

    var backgroundStyles = {
      backgroundImage: "url('/img/people-coffee-notes-tea.jpg')",
      backgroundRepeat: "no-repeat",
      backgroundAttachment: "fixed",
      backgroundPosition: "50% 100px",
      position: "absoulute",
    }

    const materials = recycledMaterials.map((material) => {
        //console.log("Material: " + material.title + "\n\t\t Needs proof of ownership: " + material.proofOfOwnership);
        if(material.proofOfOwnership == "true") {
          return (
            <tr class="danger">
              <td>{material.title + "*"}</td>
              <td class="mobile-hide">yes</td>
            </tr>
          );
        }
        else {
          return (
            <tr>
              <td>{material.title}</td>
              <td class="mobile-hide">no</td>
            </tr>
          );
        }
    });

    return (
      <div id="home">
        <Banner style={backgroundStyles} bannerImg="/img/scrap-metal-pile.jpg" imgScroll="true">
          <div class="row">
            <div class="col-sm-offset-3 col-sm-6" style={{textAlign: "center", postion: "relative"}}>
              <span onClick={() => {alert("Play Brand Video\nChange Me")}}><i class="fa fa-youtube-play" aria-hidden="true"></i></span>
            </div>
          </div>
        </Banner>

        <div class="panel panel-success">
          <div class="panel-heading">
            <h2>Recycleable Materials</h2>
            <p>
              Below is a list of materials that can be recycled.
              *All items in <span style={{color: "red"}}>RED</span> need <strong>Proof of Ownership</strong>
            </p>
          </div>

          <div class="panel-body">
            <div id="materialsTable" class="container">
                <div class="table-responsive">
                <table class="table table-table-condensed">
                  <thead>
                    <tr>
                      <th>Material(s)</th>
                      <th class="mobile-hide">Proof of Ownership?</th>
                    </tr>
                  </thead>
                  <tbody>
                    {materials}
                  </tbody>
                </table>
                </div>
              </div>
            </div>
          </div>
        </div>


    );
  }
}
