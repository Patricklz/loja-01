import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { MdShoppingBasket } from 'react-icons/md'
import { Container, Cart } from './style-header';

import logo from '../../assets/logo.png';

export default function Header() {
    const cartSize = useSelector(state => state.cart.length)

    return (
        <Container>
            <Link to="/">
                <img src={logo} from alt="Rocketshoes" />
            </Link>

            <Cart to="/cart">
                <div>
                    <strong>Meu carrinho</strong>
                    <span>{cartSize} itens</span>
                </div>
                <MdShoppingBasket size={36} color="#FFF" />

            </Cart>
        </Container>
    )
}


