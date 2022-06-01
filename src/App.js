import { React, useState } from "react";
import ClobalStyle from "./Components/GlobalStyle";
import Menu from "./Components/Menu";
import ModalItem from "./Components/ModalItem";
import NavBar from "./Components/NavBar";

const App = () => {

  const [openItem, setOpenItem] = useState(null);

  const [activeState, setActiveState] = useState(true);

  return (
    <>
      <ClobalStyle />
      <NavBar />
      <Menu
        setOpenItem={setOpenItem}
        setActiveState={setActiveState}
      />
      <ModalItem
        openItem={openItem}
        setOpenItem={setOpenItem}
        activeState={activeState}
        setActiveState={setActiveState}
      />
    </>
  );
}
console.log();

export default App;
