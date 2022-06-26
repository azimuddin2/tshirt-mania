import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './AddProduct.css';

const AddProduct = (props) => {
    const {product, handleRemoveFromCart} = props;
    const {name, picture} = product;

    return (
        <div className='add-product'>
            <img src={picture} alt="" />
            <h3>{name}</h3>
            <FontAwesomeIcon onClick={() => handleRemoveFromCart(product)}
             className='icon' icon={faTrash}></FontAwesomeIcon>
        </div>
    );
};

export default AddProduct;