import React from "react";
import Banner from "./common/Banner";

import {info} from "./resources/businessinfo";

export default class About extends React.Component {
  render() {

    var backgroundStyles = {
      backgroundRepeat: "no-repeat",
      backgroundAttachment: "fixed",
      backgroundPosition: "0% 250px",
      position: "absoulute",
    }

    const infoCard = info.map((info)=>{
      if(info.type == "hours") {
        return (
          <ul key={info.type} style={{listStyle: "none", display: "flex", flexDirection: "column", justifyContent: "space-between"}}>
            <li><i class={info.iconClass} /> {info.type.toUpperCase()}</li>
            <li>
              <ul style={{listStyle: "none", display: "flex", flexDirection: "row", justifyContent: "space-between"}}>
                <li><strong>Monday - Friday</strong></li>
                <li><strong>{info.data.monFri}</strong></li>
              </ul>
            </li>
            <li>
              <ul style={{listStyle: "none", display: "flex", flexDirection: "row", justifyContent: "space-between"}}>
                <li><strong>Saturday</strong></li>
                <li><strong>{info.data.sat}</strong></li>
              </ul>
            </li>
            <li>
              <ul style={{listStyle: "none", display: "flex", flexDirection: "row", justifyContent: "space-between"}}>
                <li><strong>Sunday</strong></li>
                <li><strong>{info.data.sun}</strong></li>
              </ul>
            </li>
          </ul>
        );
      }
      else {
        return (
          <ul key={info.type} style={{listStyle: "none", display: "flex", flexDirection: "row", justifyContent: "space-between"}}>
            <li><i class={info.iconClass} /> {info.type.toUpperCase()}</li>
            <li><strong><a href={info.href} >{info.data}</a></strong></li>
          </ul>
        );
      }
    });

    return (
      <div id="about">
        <Banner style={backgroundStyles} bannerImg="/img/flatbeds.jpg" imgScroll="true">
          <div class="row">
            <div class="col-sm-offset-3 col-sm-6" style={{textAlign: "center", postion: "relative"}}>
              <span onClick={() => {alert("Play Brand Video\nChange Me")}}><i class="fa fa-youtube-play" aria-hidden="true"></i></span>
            </div>
          </div>
        </Banner>
        <div class="panel">
          <div class="panel-heading about-header panel-blue" style={{color: "white", textAlign: "center"}}>
            <h1>ABOUT US</h1>
          </div>
          <div class="panel-body">
            <div class="row well">
              <div class="col-sm-3">
                <img src="/img/about-us-scrap-yard.jpeg" class="about-col-img" />
              </div>
              <div class="col-sm-6">
                <p class="about-col-p">
                  Welcome! SMT Recycling specializes in non-ferrous scrap metal recycling. Our family-owned and operated business in Winter Park, Florida has been serving the scrap metal industry. Our commitment to quality service has enabled us to grow. We guarantee top prices, cash upon delivery, are paid for your scrap. Let SMT Recycling be your scrap metal recycler of choice!
                  We comply with all local, state, and federal environmental and waste disposal regulations.
                </p>
              </div>
              <div class="col-sm-3">
                <img src="/img/about-us-scrap-yard.jpeg" class="about-col-img" />
              </div>
            </div>

            <div class="row well">
              <div class="col-sm-6 ">
                  <iframe class="googleMaps" width="600" height="450" frameBorder="0"
                    src="https://www.google.com/maps/embed/v1/place?q=place_id:Ei0zMDQxIE4gRm9yc3l0aCBSZCwgV2ludGVyIFBhcmssIEZMIDMyNzkyLCBVU0E&key=AIzaSyDHk_eNKRoOIR2F4GTS43Elq_U2_7QvODw" allowFullScreen></iframe>
              </div>

              <div class="col-sm-6 ">

                <div class="panel panel-long">
                  <div class="panel-heading panel-green about-header" style={{textAlign: "center"}}>
                    <h4>HOW TO FIND US?</h4>
                  </div>

                  <div class="panel-body panel-lg-text">

                    {infoCard}
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    );
  }
}
