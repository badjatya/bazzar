import React, { Component } from "react";

// Importing Components
import MenuItem from "./../Menu-Item/menu-item.component";

// Importing Data
import directorySectionData from "./directory.data";

// Importing Styles
import "./directory.styles.scss";

class Directory extends Component {
  constructor() {
    super();

    this.state = {
      sections: directorySectionData,
    };
  }

  render() {
    return (
      <div className="directory-menu">
        {this.state.sections.map(({ id, ...otherSectionProps }) => (
          <MenuItem key={id} {...otherSectionProps} />
        ))}
      </div>
    );
  }
}

export default Directory;
