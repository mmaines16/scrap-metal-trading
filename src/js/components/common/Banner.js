import React from "react";
import ReactDOM from "react-dom";

export default class Banner extends React.Component {
  constructor() {
    super();

    this.state = {
      style: {
        transition: "all 50ms ease-in-out",
      },
      bannerImg: "",
      imgScroll: "false",
    };
  }

  moveImage = () => {
    var node = ReactDOM.findDOMNode(this);
    var bannerImg = node.getElementsByClassName('banner-img')[0];

    var speed = .05;

    console.log(bannerImg.style.top);

    var windowYOffset = window.pageYOffset,
          elTop = (-windowYOffset * speed) + "px";


      bannerImg.style.top = elTop;

  }

  componentDidMount() {
    var newState = {...this.state};

    if(this.props.style) {
      newState.style = this.props.style;
      newState = Object.assign(newState, this.state.style);
    }
    if(this.props.bannerImg) {
      newState.bannerImg = this.props.bannerImg;

    }
    if(this.props.imgScroll=="true") {
      newState.imgScroll = this.props.imgScroll;

      window.addEventListener("scroll", () => {
        this.moveImage();
      });

    }


    this.setState(newState);
  }

  render() {


    return (
      <div class="banner">
        <div class="banner-img-filter banner-header">
          <img src={this.state.bannerImg} class="banner-img" style={this.state.style}/>
        </div>

        <div class="banner-header-content">
            {this.props.children}
        </div>
      </div>
    );
  }
}
