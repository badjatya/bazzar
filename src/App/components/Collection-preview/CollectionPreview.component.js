import React from "react";

// Importing Components
import CollectionItem from "./../Collection-item/CollectionItem.component";

// Importing Styles
import "./CollectionPreview.styles.scss";

const CollectionPreview = ({ title, items }) => {
  return (
    <div className="collection-preview">
      <h1 className="title">{title}</h1>
      <div className="preview">
        {items
          .filter((item, index) => index < 4)
          .map(({ id, ...otherItemsProps }) => (
            <CollectionItem key={id} {...otherItemsProps} />
          ))}
      </div>
    </div>
  );
};
export default CollectionPreview;
