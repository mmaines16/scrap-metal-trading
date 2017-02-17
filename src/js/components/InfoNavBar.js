import React from "react";

import {info} from "./resources/businessinfo";

export default class InfoNavBar extends React.Component {

  render() {
    //============== Build Contact Info HTML from imported Javascript Object ==============
    const contactInfo = info.map((info) => {
      if(info.type == "hours") {
        return (
          <div class="info-nav-section" key={info.type}>
            <span class="info-nav-header">{info.headerText.toUpperCase()}: </span>
            <span class="info-nav-data">
              <ul class="info-nav-list">
                <li class="info-nav-list-item"><strong>Mon-Fri:</strong> {info.data.monFri} </li>
                <li class="info-nav-list-item"><strong>Sat:</strong> {info.data.sat} </li>
                <li class="info-nav-list-item"><strong>Sun:</strong> {info.data.sun} </li>
              </ul>
            </span>
          </div>
        );
      }
      else {
        return (
          <div class="info-nav-section" key={info.type}>
            <span class="info-nav-header"><a href={info.href}>{info.headerText.toUpperCase()}</a>: </span>
            <span class="info-nav-data"><a href={info.href}>{info.data}</a></span>
          </div>
        );
      }
    });
    //======================================================================================

    //==================== Render the Built JSX From the Contact Info List =================
    return (
      <div class="info-nav-bar">

        {contactInfo}

      </div>
    );
    //=======================================================================================
  }
}
