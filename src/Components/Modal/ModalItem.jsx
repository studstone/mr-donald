import { React } from 'react';
import styled from 'styled-components';
import IconCloseButton from '../../image/close.svg';
import '../../style/modal-animation.css';
import ButtonCheckout from '../Button/ButtonCheckout';
import CountItem from './CountItem';
import useCount from '../Hooks/useCount'

const Overlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0, .5);
    z-index: 20;
`
const Modal = styled.div`
    position: fixed;
    top: 20%;
    transform: translateX(-50%);
    left: 50%;
    width: 600px;
    height: 600px;
    border-radius: 8px;
`
const Banner = styled.div`
    height: 200px;
    background-image: url(${({ img }) => img});
    background-size: cover;
    background-position: center;
    border-radius: 8px 8px 0 0 ;
`
const ModalContent = styled.div`
    padding: 20px 53px 43px 37px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    background-color: #fff;
    min-height: 403px;
    border-radius:  0 0 8px 8px;
`
const ProductInfo = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const ProductName = styled.span`
    font-family: 'Pacifico', cursive;
    font-style: normal;
    font-weight: 400;
    font-size: 30px;
    line-height: 53px;
`
const ProductPrice = styled.span`
    font-family: 'Pacifico', cursive;
    font-style: normal;
    font-weight: 400;
    font-size: 30px;
    line-height: 53px;
`

const CloseButton = styled.button`
    position: absolute;
    right: 30px;
    top: 30px;
    width: 40px;
    height: 40px;
    background-image: url(${IconCloseButton});
    background-color: transparent;
    border: none;
    transition: 0.2s;
    transform-origin: 50% 50%;
    &:hover {
    transform: rotate(180deg);
    }
`

const TotalPriceItem = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    & span {
        font: normal 400 21px/25px Roboto, sans-serif;
    }
`

export const calcPrice = order => order.price * order.count


const ModalItem = ({ openItem, setOpenItem,
    activeState, setActiveState,
    orders, setOrders }) => {
    const counter = useCount()
    const order = {
        ...openItem,
        count: counter.count
    };

    let timeout = null;

    const closeModal = (e) => {
        clearTimeout(timeout)
        if (e.target.id === 'overlay' || e.target.id === 'close-button') {
            timeout = setTimeout(() => setOpenItem(null), 1000)
            setActiveState(false)
        }
    }

    document.addEventListener("keydown", e => {
        clearTimeout(timeout)
        if (e.key === "Escape" && Overlay) {
            timeout = setTimeout(() => setOpenItem(null), 1000)
            setActiveState(false)
        }
    });

    const addToOrder = () => {
        setTimeout(() => setOrders([...orders, order]), 1000)
        setTimeout(() => setOpenItem(null), 1000)
        setActiveState(false)
    }

    return (
        < Overlay
            id='overlay'
            onClick={closeModal}
            className={`${activeState ? "overlay-open" : "overlay-close"}`}
        >
            <Modal className={`${activeState ? "modal-open" : "modal-close"}`}>
                <Banner img={openItem.img} />
                <ModalContent>
                    <ProductInfo>
                        <ProductName>{openItem.name}</ProductName>
                        <ProductPrice>{openItem.price.toLocaleString('ru-RU',
                            { style: 'currency', currency: 'RUB' })}</ProductPrice>
                    </ProductInfo>
                    <CountItem {...counter} />
                    <TotalPriceItem>
                        <span>Цена:</span>
                        <span>{calcPrice(order).toLocaleString('ru-RU',
                            { style: 'currency', currency: 'RUB' })}</span>
                    </TotalPriceItem>
                    <ButtonCheckout onClick={addToOrder}>Добавить</ButtonCheckout>
                </ModalContent>
                <CloseButton id='close-button' />
            </Modal>
        </Overlay >
    );
}

export default ModalItem;