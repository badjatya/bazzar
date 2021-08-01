import React from "react";

const CollectionPreview = ({ title, items }) => {
  return (
    <div className="collection-preview">
      <h1 className="title">{title}</h1>
      <div className="preview">
        {items
          .filter((item, index) => index < 4)
          .map((item) => (
            <p key={item.id}>{item.name}</p>
          ))}
      </div>
    </div>
  );
};
export default CollectionPreview;
