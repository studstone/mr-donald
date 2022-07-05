import React from "react";
import ClobalStyle from "./Components/StyledComponents/GlobalStyle";
import Menu from "./Components/Menu/Menu";
import ModalItem from "./Components/Modal/ModalItem";
import NavBar from "./Components/NavBar/NavBar";
import Order from "./Components/Order/Order";
import useOpenItem from './Components/Hooks/useOpenItem';
import useOrders from './Components/Hooks/useOrders';
import useActiveState from './Components/Hooks/useActiveState';

const App = () => {

  const openItem = useOpenItem()

  const activState = useActiveState()

  const orders = useOrders()

  return (
    <>
      <ClobalStyle />
      <NavBar />
      <Order {...orders} />
      <Menu
        {...openItem}
        {...activState}
      />
      {openItem.openItem && <ModalItem
        {...openItem}
        {...activState}
        {...orders}
      />}
    </>
  );
}
console.log();

export default App;
