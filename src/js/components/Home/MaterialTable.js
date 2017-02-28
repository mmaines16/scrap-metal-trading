import React from "react";
import {recycledMaterials} from "../resources/materials";

export default class MaterialTable extends React.Component {

  // Constructor to set the initial or default state values
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

  //== Method to initialize all state values in state that rely on other components or external data==
  componentDidMount() {
    const numPages = Math.ceil(recycledMaterials.length/this.state.itemsPerPage);
    this.setState({...this.state, numberOfPages: numPages});

    document.getElementById('pagination-previous').className = "disabled";
    document.getElementById('pagination-first').className = "disabled";
  }
  //================================================================================================

  //============ Handles filtering the material list based on the "search" input field =============
  onInputKeyUp = () => {
    //===================== Declare variables ===========================
    var input, filter, table, tr, td, i;
    input = document.getElementById("materialSearchInput");
    filter = input.value.toUpperCase();
    //===================================================================

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


    //====================== Set the materials list to the filtered list ============
    if(newMaterialList.length > 0) {
      var numPages = Math.ceil(newMaterialList.length/this.state.itemsPerPage);
      if(numPages == 0)
        numPages++;
      this.setState({...this.state, page: 1, materials: newMaterialList, numberOfPages: numPages});
    }
    //===============================================================================
  };
  //==========================================================================================


  //========================= Mehtods that Control Pagination ================================

  // Handles when a pagination button with a number is clicked. Takes user the page in the table
  //     corresponding to the number they picked
  changePage = (pageId) => {
    if(this.state.page == pageId) return;

    this.checkPagination(pageId);
    this.setState({...this.state, page: pageId});
  };

  // Handles when the "<<" or "First" button is clicked. Takes the user the the first page in the table
  firstPage = () => {
    if(this.state.page == 1 || this.state.page == "1" || document.getElementById('pagination-previous').className == "disabled")
      return;

    this.checkPagination(1);
    this.setState({...this.state, page: 1});
  };

  // Handles when the ">" or "Next" button is clicked. Takes the user to the next page in the table
  incrementPage = () => {
    if(document.getElementById('pagination-next').className == "disabled")
      return;

    this.checkPagination(this.state.page + 1);
    this.setState({...this.state, page: (this.state.page + 1)});
  };

  // Handles when the "<" or "Previous" button is clicked. Takes the user to the previous page in the table
  decrementPage = () => {
    if(document.getElementById('pagination-previous').className == "disabled")
      return;

    this.checkPagination(this.state.page - 1);
    this.setState({...this.state, page: (this.state.page - 1)});
  };

  // Handles when the ">>" or "First" button is clicked. Takes the user the the last page in the table
  lastPage = () => {
    if(this.state.page == this.state.numberOfPages || document.getElementById('pagination-last').className == "disabled")
     return;

    this.checkPagination(this.state.numberOfPages);
    this.setState({...this.state, page: this.state.numberOfPages});
  };

  // Handles setting and unset the CSS classes that control whether a button is enabled or disabled
  checkPagination = (nextPage) => {
    if(nextPage >= this.state.numberOfPages) {
      document.getElementById('pagination-next').className = "disabled";
      document.getElementById('pagination-last').className = "disabled";

      document.getElementById('pagination-previous').className = "";
      document.getElementById('pagination-first').className = "";
    }
    else if((nextPage) <= 1) {
      document.getElementById('pagination-previous').className = "disabled";
      document.getElementById('pagination-first').className = "disabled";

      document.getElementById('pagination-next').className = "";
      document.getElementById('pagination-last').className = "";
    }
    else {
      document.getElementById('pagination-previous').className = "";
      document.getElementById('pagination-first').className = "";
      document.getElementById('pagination-next').className = "";
      document.getElementById('pagination-last').className = "";
    }
  }
  //=============================================================================================

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
          <ul class="pagination pagination-custom" style={{display: "flex", flexDirection: "row", justifyContent: "flex-end"}}>
            <li id="pagination-first" onClick={this.firstPage}><a>&lt;&lt;</a></li>
            <li id="pagination-previous" onClick={this.decrementPage}><a>&lt;</a></li>
            {tablePages}
            <li id="pagination-next" onClick={this.incrementPage}><a>&gt;</a></li>
            <li id="pagination-last" onClick={this.lastPage}><a>&gt;&gt;</a></li>
          </ul>
          </div>
        </div>
      </div>
    );
  }
}
