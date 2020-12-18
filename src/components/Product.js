import React from 'react';
import { useParams } from 'react-router-dom';

const Product = ({ data }) => {
    const { productId } = useParams();
    const product = data.find((product) => product.id === Number(productId));
    let productData;

    product
        ? (productData = (
              <div className='flex flex-col items-center justify-center my-6'>
                  <h3 className='text-2xl'>{product.name}</h3>
                  <p>{product.description}</p>
                  <hr />
                  <h4>{product.status}</h4>
              </div>
          ))
        : (productData = <h2>Sorry, but that product doesn't exist.</h2>);

    return (
        <div>
            <div>{productData}</div>
        </div>
    );
};

export default Product;
