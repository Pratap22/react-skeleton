import { createGlobalStyle } from "styled-components";
import { palette, font } from "styled-theme";

const AppGlobalStyle = createGlobalStyle`
font-family: ${font("primary", 0)};
html,
body {
  background-color: #f9f9f9;
}

h1,
h2,
h3,
h4,
h5,
h6,
a,
p,
li,
input,
textarea,
span,
div,
img,
svg {
  &::selection {
    background: ${palette("primary", 0)};
    color: #fff;
  }
}

.clearfix::after {
  content: "";
  clear: both;
  display: table;
}
`;
export default AppGlobalStyle;
