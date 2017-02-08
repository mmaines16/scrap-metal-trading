import React from "react";

export default class Banner extends React.Component {
  constructor() {
    super();

    this.state = {
      style: {},
      bannerImg: "",
    };
  }

  componentDidMount() {
    var newState = {...this.state};

    if(this.props.style) {
      newState.style = this.props.style;
    }
    if(this.props.bannerImg) {
      newState.bannerImg = this.props.bannerImg;
    }

    this.setState(newState);
  }

  render() {


    return (
      <div class="banner banner-header">
        <div class="banner-img-filter banner-header">
          <img src={this.state.bannerImg} class="banner-img" />
        </div>

          <div class="row">
            <div class="col-sm-12">
              {this.props.children}
            </div>
          </div>
      </div>
    );
  }
}
