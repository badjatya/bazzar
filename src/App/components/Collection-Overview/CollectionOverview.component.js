import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

// Importing Components
import CollectionPreview from "../Collection-preview/CollectionPreview.component";

// Importing From redux
import { selectCollectionsForPreview } from "../../redux/shop/shop.selectors";

// Importing Styles
import { CollectionsOverviewContainer } from "./collection-overview.styles";

const CollectionsOverview = ({ collections }) => (
  <CollectionsOverviewContainer>
    {collections.map(({ id, ...otherCollectionProps }) => (
      <CollectionPreview key={id} {...otherCollectionProps} />
    ))}
  </CollectionsOverviewContainer>
);

const mapStateToProps = createStructuredSelector({
  collections: selectCollectionsForPreview,
});

export default connect(mapStateToProps)(CollectionsOverview);
