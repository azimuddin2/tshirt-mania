import React from 'react';
import './Product.css'

const Product = (props) => {
    const {product, handleAddToCart} = props;
    const {name, picture, price} = product;
    return (
        <div className='product'>
            <img src={picture} alt="" />
            <h2>{name}</h2>
            <p>Price: ${price}</p>
            <button onClick={() => handleAddToCart(product)}>Add to Cart</button>
        </div>
    );
};

export default Product;