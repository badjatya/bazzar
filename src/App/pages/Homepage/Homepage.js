import React from "react";

// Importing Components
import Directory from "../../components/Directory/Directory.component";

// Importing Styles
import { HomePageContainer } from "./homepage.styles";

const Homepage = () => {
  return (
    <HomePageContainer>
      <Directory />
    </HomePageContainer>
  );
};
export default Homepage;
