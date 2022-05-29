import { React } from "react";
import { createGlobalStyle } from "styled-components";
import NavBar from "./Components/NavBar";

const ClobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
  }

  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }

  body {
    margin: 0;
    background-color: #f0f0f0;
    font-family: 'Roboto', sans-serif;
    font-size: 10px;
    color: black;
  }

  img{
    max-width: 100%;
    height: auto;
  }

  a{
    text-decoration: none;
    color: inherit;
  }

  ul{
    list-style: none;
    padding: 0;
    margin: 0;
  }
  
  h1,
  h2,
  h3{
    font-family: 'Pacifico', cursive;
    padding: 0;
    margin: 0;
  }

  p{
    padding: 0;
    margin: 0;
  }

  button {
    cursor: pointer;
  }

  input, button{
    font-family: inherit;
  }
`;

function App() {
  return (
    <>
      <ClobalStyle />
      <NavBar />
    </>
  );
}

export default App;
