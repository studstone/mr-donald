import { React } from "react";
import { createGlobalStyle } from "styled-components";

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
    background-color: f0f0f0;
    font-family: 'Roboto', sans-serif;
    font-size: 20px;
    color: black;
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
`;

function App() {
  return (
    <div>
      <ClobalStyle />
      <div className="App">
        <h1>привет</h1>
      </div>
    </div>
  );
}

export default App;
