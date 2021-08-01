import React, { Component } from "react";

// Importing Shop Data
import SHOP_DATA from "./shop.data";

// Importing Components
import CollectionPreview from "../../components/Collection-preview/CollectionPreview.component";

export class ShopPage extends Component {
  constructor() {
    super();

    this.state = {
      collections: SHOP_DATA,
    };
  }

  render() {
    return (
      <div className="shop-page">
        {this.state.collections.map(({ id, ...otherCollectionProps }) => (
          <CollectionPreview key={id} {...otherCollectionProps} />
        ))}
      </div>
    );
  }
}

export default ShopPage;
