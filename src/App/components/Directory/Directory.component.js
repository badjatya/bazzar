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
        {this.state.sections.map((section) => (
          <MenuItem
            key={section.id}
            title={section.title}
            imageUrl={section.imageUrl}
            size={section.size}
          />
        ))}
      </div>
    );
  }
}

export default Directory;
