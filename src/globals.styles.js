import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
@import url("https://fonts.googleapis.com/css2?family=Open+Sans+Condensed:ital,wght@0,300;0,700;1,300&display=swap");

body {
  font-family: "Open Sans Condensed", sans-serif;
  padding: 20px 60px;

  @media screen and (max-width: 800px) {
      padding: 10px;
  }
}

a {
  text-decoration: none;
  color: #000;
}

* {
  box-sizing: border-box;
}

`;

export default GlobalStyle;
