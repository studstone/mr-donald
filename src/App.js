import { React } from "react";
import ClobalStyle from "./Components/GlobalStyle";
import Menu from "./Components/Menu";
import NavBar from "./Components/NavBar";

function App() {
  return (
    <>
      <ClobalStyle />
      <NavBar />
      <Menu />
    </>
  );
}

export default App;
