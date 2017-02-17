import React from "react";

import {info} from "./resources/businessinfo";

export default class InfoNavBar extends React.Component {

  render() {

    const contactInfo = info.map((info) => {
      console.log(info);
      if(info.type == "hours") {
        console.log(info.data);
      }
      else {

      }
    });

    return (
      <div class="info-nav-bar">
        <div class="info-nav-section">
          <span class="info-nav-header">Call Us: </span>
          <span class="info-nav-data"><a href="tel:407-571-9970">407-571-9970</a></span>
        </div>

        <div class="info-nav-section">
          <span class="info-nav-header">Email Us: </span>
          <span class="info-nav-data"><a href="mailto:mmaines16@gmail.com">mmaines16@gmail.com</a></span>
        </div>

        <div class="info-nav-section">
          <span class="info-nav-header">Find Us: </span>
          <span class="info-nav-data">
            <a href="https://www.google.com/maps/place/3041+N+Forsyth+Rd,+Winter+Park,+FL+32792/@28.5885367,-81.2968806,17z/data=!3m1!4b1!4m5!3m4!1s0x88e76f786049c399:0xe78c3eaa03b8c58b!8m2!3d28.5885367!4d-81.2946919">
              3041 N. Forsyth Road Winter Park, FL
            </a>
          </span>
        </div>

        <div class="info-nav-section">
          <span class="info-nav-header">Hours: </span>
          <span class="info-nav-data">
            <ul class="info-nav-list">
              <li class="info-nav-list-item"><strong>Mon-Fri:</strong> 8AM-5PM</li>
              <li class="info-nav-list-item"><strong>Sat:</strong> 8AM-2PM</li>
              <li class="info-nav-list-item"><strong>Sun:</strong> Closed</li>
            </ul>
          </span>
        </div>
      </div>
    );
  }
}
