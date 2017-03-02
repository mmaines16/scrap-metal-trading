import React from "react";

import MaterialsView from "./MaterialsView";

export default class ComponentName extends React.Component {

  constructor() {
    super();

    this.state = {
      view: {
        currentView: "materials",
        views: ["materials", "images"],
      },
    };
  }

  handleViewChange = (view) => {
    console.log(view);
  }

  render() {

    var view = (<MaterialsView></MaterialsView>);

    const viewList = this.state.view.views.map((view) => {
      return (
        <span key={view} style={{marginLeft: "20%", marginTop: "30px"}}><a style={{color: "white", fontSize: "20px"}}
          onClick={() => {this.handleViewChange(view)}}>
          {view.toUpperCase()}
        </a></span>);
    });


    return (
      <div id="console" style={{display: "flex", flexDirection: "row"}}>
        <div style={{width: "15vw", minHeight: "60vh", backgroundColor: "#F57631", display: "flex", flexDirection: "column"}}>
          {viewList}
        </div>

        <div style={{width: "85vw", minHeight: "60vh", backgroundColor: "#DDDDDD", borderRadius: "10px", padding: "10px"}}>
          {view}
        </div>
      </div>
    );
  }
}
