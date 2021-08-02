import React from "react";

// Importing Route
import { Route } from "react-router-dom";

// Importing Components
import CollectionsOverview from "./../../components/Collection-Overview/CollectionOverview.component";
import CollectionPage from "../Collection/Collection.page";

const ShopPage = ({ match }) => {
  return (
    <div className="shop-page">
      <Route exact path={`${match.path}`} component={CollectionsOverview} />
      <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
    </div>
  );
};

export default ShopPage;
