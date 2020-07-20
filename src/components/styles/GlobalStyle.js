import styled, { createGlobalStyle } from "styled-components";
import theme from "./theme";
const GlobalStyle = createGlobalStyle`
html{
  box-sizing: border-box;
  font-size: 10px;

}
*, *:before, *:after{
  box-sizing: border-box;
}

html, body, #__next{
 height: 100%;
}

body{
  padding: 0;
  margin: 0;
  font-size: 1.8rem;
  font-weight: 500;



  font-family: 'Poppins', sans-serif;
}
p, a, button{
  color: ${theme.gray};
}
button{
border: 1px solid transparent;
background: white;
margin: 2px;
}
h2, h4{
margin: 0;
}
`;

export default GlobalStyle;
