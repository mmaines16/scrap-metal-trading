import React from "react";
import {recycledMaterials} from "../resources/materials";

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
      }
    };
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

    // Loop through all table rows, and hide those who don't match the search query
    for (i = 0; i < tr.length; i++) {
      td = tr[i].getElementsByTagName("td")[0];
      if (td) {
        if (td.innerHTML.toUpperCase().indexOf(filter) > -1) {
          tr[i].style.display = "";
        } else {
          tr[i].style.display = "none";
        }
      }
    }
  };

  render() {

    const materials = recycledMaterials.map((material) => {
        //console.log("Material: " + material.title + "\n\t\t Needs proof of ownership: " + material.proofOfOwnership);
        if(material.proofOfOwnership == "true") {
          return (
            <tr class="danger" key={material.title}>
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
              {materials}
            </tbody>
          </table>
          </div>
        </div>
      </div>
    );
  }
}
