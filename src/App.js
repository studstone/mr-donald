import { React, useState } from "react";
import ClobalStyle from "./Components/GlobalStyle";
import Menu from "./Components/Menu";
import ModalItem from "./Components/ModalItem";
import NavBar from "./Components/NavBar";
import Order from "./Components/Order";
import useOpenItem from './Components/Hooks/useOpenItem'
import useOrders from './Components/Hooks/useOrders'

const App = () => {

  const openItem = useOpenItem()

  const [activeState, setActiveState] = useState(true);

  const orders = useOrders()

  return (
    <>
      <ClobalStyle />
      <NavBar />
      <Order {...orders} />
      <Menu
        {...openItem}
        setActiveState={setActiveState}
      />
      {openItem.openItem && <ModalItem
        {...openItem}
        activeState={activeState}
        setActiveState={setActiveState}
        {...orders}
      />}
    </>
  );
}
console.log();

export default App;
