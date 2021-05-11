import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
html, body {
    margin: 0;
    padding: 0;
  }
  *, *::after, *::before {
    box-sizing: border-box;
  }
body{
  background:#f6f8fb;
  margin:0;
  padding:0;
  box-sizing: border-box;
  list-style-type: none;
  text-decoration: none;
  width: 100%;
  height: 100vh;
  text-rendering: optimizeLegibility;
  font-family:Lato;
  font-weight:bold;
  font-style:normal;
}
`;
