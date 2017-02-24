import React from "react";
import {recycledMaterials} from "../resources/materials";
import { TablePagination } from 'react-pagination-table';

export default class MaterialTable extends React.Component {
  constructor() {
    super();

    this.state = {
      materials: recycledMaterials,
      inputStyles: {
        backgroundImage: "url(img/searchicon.png)",
        backgroundPosition: "10px 12px",
        backgroundRepeat: "no-repeat",
        width: "100%",
        fontSize: "16px",
        padding: "12px 20px 12px 40px",
        border: "1px solid #ddd",
        marginBottom: "12px",
      },
      page: 1,
      numberOfPages: 1,
      itemsPerPage: 10,
    };
  }

  componentDidMount() {
    const numPages = Math.ceil(recycledMaterials.length/this.state.itemsPerPage);
    this.setState({...this.state, numberOfPages: numPages});
  }

  // #myInput {
  //     background-image: url('/css/searchicon.png'); /* Add a search icon to input */
  //     background-position: 10px 12px; /* Position the search icon */
  //     background-repeat: no-repeat; /* Do not repeat the icon image */
  //     width: 100%; /* Full-width */
  //     font-size: 16px; /* Increase font-size */
  //     padding: 12px 20px 12px 40px; /* Add some padding */
  //     border: 1px solid #ddd; /* Add a grey border */
  //     margin-bottom: 12px; /* Add some space below the input */
  // }

  onInputKeyUp = () => {
    // Declare variables
    var input, filter, table, tr, td, i;
    input = document.getElementById("materialSearchInput");
    filter = input.value.toUpperCase();
    table = document.getElementById("mTable");
    tr = table.getElementsByTagName("tr");

    //======= If the filter is empty set the state to all materials and return =====
    if(filter == "") {
      const numPages = Math.ceil(recycledMaterials.length/this.state.itemsPerPage);
      this.setState({...this.state, page: 1, materials: recycledMaterials, numberOfPages: numPages});
      return;
    }
    //==============================================================================

    //====== Filter the materials based on the search input box text value ==========
    var newMaterialList = [];
    recycledMaterials.forEach(function(material) {
      if(material.title.toUpperCase().indexOf(filter)!=-1)
            newMaterialList.push(material);
    });
    //===============================================================================



    if(newMaterialList.length > 0) {
      var numPages = Math.ceil(newMaterialList.length/this.state.itemsPerPage);
      if(numPages == 0)
        numPages++;
      this.setState({...this.state, page: 1, materials: newMaterialList, numberOfPages: numPages});
    }
  };

  changePage = (pageId) => {
    if(this.state.page == pageId) return;

    this.setState({...this.state, page: pageId});
  }

  render() {
    //=================== Map Filtered Materials to HTML elements ===================
    const materials = this.state.materials.map((material) => {

        if(material.proofOfOwnership == "true") {
          return (
            <tr class="danger-custom" key={material.title}>
              <td>{material.title + "*"}</td>
              <td class="mobile-hide">yes</td>
            </tr>
          );
        }
        else {
          return (
            <tr key={material.title}>
              <td>{material.title}</td>
              <td class="mobile-hide">no</td>
            </tr>
          );
        }

    });
    //================================================================================

    //== Determine which materials are visible depending on the current page in state ===
    var visibleMaterials = [];

    const startIndex = (this.state.itemsPerPage*(this.state.page-1));
    const endIndex = (this.state.itemsPerPage*this.state.page);

    for(var i = startIndex; i < endIndex; i++) {
      visibleMaterials.push(materials[i]);
    }
    // ================================================================================


    // ========== Create the Pagination buttons on the bottom of the table =============
    const tablePages = Array(this.state.numberOfPages).fill().map((_, i) => {
      if(this.state.page == i+1) {
        return (
          <li id={i+1} key={i+1} class="active" onClick={() => {this.changePage(i+1)}}><a>{i+1}</a></li>
        );
      }
      return (
        <li id={i+1} key={i+1} onClick={() => {this.changePage(i+1)}}><a>{i+1}</a></li>
      );
    });;
    //==================================================================================


    return (
      <div>
      <div id="materialsTable" class="container">
          <div class="table-responsive">
            <input type="text" id="materialSearchInput"
              onKeyUp={this.onInputKeyUp} placeholder="Search for materials.."
              style={this.state.inputStyles}/>
          <table id="mTable" class="table table-table-condensed">
            <thead>
              <tr>
                <th>Material(s)</th>
                <th class="mobile-hide">Proof of Ownership?</th>
              </tr>
            </thead>
            <tbody>
              {visibleMaterials}
            </tbody>
          </table>
          <ul class="pagination pagination-lg" style={{display: "flex", flexDirection: "row", justifyContent: "flex-end"}}>
            {tablePages}
          </ul>
          </div>
        </div>
      </div>
    );
  }
}
