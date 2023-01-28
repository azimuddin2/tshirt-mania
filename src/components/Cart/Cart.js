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



/** Conditional Rendering \\ Module-54 || Video-4 
 * 1. use element in a variable and then use if-else to set value
 * 2. ternary operation condition ? true : false
 * 3. && operator (if condition is true, i want to display something)
 * 4. || operator (if condition is false, i want to display something)
 */