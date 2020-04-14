import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { MdShoppingBasket } from 'react-icons/md'
import { Container, Cart } from './style-header';

import logo from '../../assets/logo.png';

function Header({ cartSize }) {
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

export default connect(state => ({
    cartSize: state.cart.length,
}))(Header);
