import React from 'react';


const ProductsManger = ({ product }) => {
    const { name, quantity, price, supplier } = product;
    return (
        <tr>
            <td title={name}>{name.slice(0, 40)}...</td>
            <td>{(quantity === 0) ? 'Not available' : quantity}</td>
            <td>{price}</td>
            <td>{supplier}</td>
            <td className='w-full bg-warning text-center bg-opacity-10'>
                Delete
            </td>
        </tr>
    );
};

export default ProductsManger;