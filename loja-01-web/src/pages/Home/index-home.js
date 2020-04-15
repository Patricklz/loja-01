import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { MdShoppingCart } from 'react-icons/md';
import { formatPrice } from '../../util/format';
import api from '../../services/api';
import { ProductList } from './styles-home';

import * as CartActions from '../../store/modules/cart/actions-cart';

function Home(props) {
    const [products, setProducts] = useState([]);
    const { amount } = props;


    useEffect(() => {
        api.get('products').then(response => setProducts(response.data));
    }, []);


    const _addProduct = (id) => {
        const { addToCartRequest } = props;
        addToCartRequest(id);
    };

    return (
        <ProductList>
            {products.map(product => (
                <li key={product.id}>
                    <img src={product.image} alt={product.title} />
                    <strong>{product.title}</strong>
                    <span>{formatPrice(product.price)}</span>

                    <button type="button" onClick={() => { _addProduct(product.id) }}>
                        <div>
                            <MdShoppingCart size={16} color="#FFF" /> {amount[product.id] || 0}
                        </div>
                        <span>ADICIONAR AO CARRINHO</span>
                    </button>
                </li >
            ))}
        </ProductList>
    )

}

const mapStateToProps = state => ({
    amount: state.cart.reduce((amount, product) => {
        amount[product.id] = product.amount;
        return amount;
    }, {})

});


const mapDispatchToProps = dispatch =>
    bindActionCreators(CartActions, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Home);
