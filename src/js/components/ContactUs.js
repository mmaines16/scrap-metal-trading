import React from "react";
import Banner from "./common/Banner";

import {info} from "./resources/businessinfo";

export default class ContactUs extends React.Component {
    render() {
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
            <div id="contact-us">
                <div class="row well" style={{marginTop: "80px"}}>
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

                    <div class="col-sm-6 ">
                        <iframe class="googleMaps" width="600" height="450" frameBorder="0"
                            src="https://www.google.com/maps/embed/v1/place?q=place_id:Ei0zMDQxIE4gRm9yc3l0aCBSZCwgV2ludGVyIFBhcmssIEZMIDMyNzkyLCBVU0E&key=AIzaSyDHk_eNKRoOIR2F4GTS43Elq_U2_7QvODw" allowFullScreen></iframe>
                    </div>
                </div>
            </div>
        );

    }
}