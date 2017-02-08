import React from "react";

export default class MobileLinkRow extends React.Component {
  constructor() {
    super();

    this.state = {
      page: {
        title: "Home",
        url: "",
      },
      style: {},
    };
  }

  componentDidMount() {
    var newState = {...this.state};

    if(this.props.page) {
      newState = {...newState, page: this.props.page};
    }

    if(this.props.style) {
      newState = {...newState, style: this.props.style};
    }

    this.setState(newState);
  }

  render() {
    var titleUpperCase = this.state.page.title.toUpperCase();
    var baseUrl = "/";
    if(this.props.baseUrl) {
      baseUrl = this.props.baseUrl;
    }

    var url = baseUrl + this.state.page.url;

    return (
        <div class="row mobile-link-row" style={this.state.style}>
          <div class="col-xs-12 mobile-link-header-text">
            <a href={url} onClick={this.props.onClick}><h2 class="">{titleUpperCase}</h2></a>

          </div>
        </div>
    );

  }
}
