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
    background-color: #f0f0f0;
    font-family: 'Roboto', sans-serif;
    font-size: 10px;
    color: black;
  }

  img {
    max-width: 100%;
    height: auto;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }
  
  h1,
  h2,
  h3 {
    font-family: 'Pacifico', cursive;
    padding: 0;
    margin: 0;
  }

  p {
    padding: 0;
    margin: 0;
  }

  button {
    cursor: pointer;
  }

  input, button {
    font: inherit;
  }

  input[type='number'] {
    -moz-appearance: textfield;
}

input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
    -webkit-appearance: none;
}
`;

export default ClobalStyle;
