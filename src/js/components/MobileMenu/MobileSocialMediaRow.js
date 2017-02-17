import React from "react";
import {socialMediaLinks} from "../resources/socialMediaLinks";

export default class MobileSocialMediaRow extends React.Component {
  constructor() {
    super();

    this.state = {
      socialMedia: socialMediaLinks,
      style: {},
    };
  }

  componentDidMount() {
    var newState = {...this.state};

    if(this.props.socialMedia) {
      newState = {...newState, socialMedia: this.props.socialMedia};
    }

    if(this.props.style) {
      newState = {...newState, style: this.props.style};
    }

    this.setState(newState);
  }

  render() {

    console.log(this.state.socialMedia);

    const mediaLinks = this.state.socialMedia.map((smLink) => {
      return <a href={smLink.url}> <i class={smLink.faClass} /></a>
    });

    console.log(mediaLinks);

    return (
        <div class="row mobile-link-row" style={this.state.style}>
          <div class="mobile-social-media-links">
            { mediaLinks }

          </div>
        </div>
    );

  }
}
