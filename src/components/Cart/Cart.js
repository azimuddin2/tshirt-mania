import React from 'react';
import AddProduct from '../AddTshirt/AddProduct';
import './Cart.css';

const Cart = (props) => {
    const { cart, handleRemoveFromCart } = props;
    return (
        <div className='cart'>
            <h2>Selected Item: {cart.length}</h2>
            <div>
                {
                    cart.map(product => <AddProduct
                        key={product._id}
                        product={product}
                        handleRemoveFromCart={handleRemoveFromCart}
                    ></AddProduct>)
                }
            </div>
        </div>
    );
};

export default Cart;