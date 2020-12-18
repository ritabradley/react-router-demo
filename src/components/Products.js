import React from 'react';
import { Link, Route, useRouteMatch } from 'react-router-dom';
import Product from './Product';
import { productData } from '../apis/products';

const Products = ({ match }) => {
    const products = productData;
    const { url } = useRouteMatch();
    /* Create an array of `<li>` items for each product */
    const linkList = products.map((product) => {
        return (
            <li key={product.id} className='flex py-4 ml-3'>
                <Link className='text-sm font-medium text-gray-900' to={`${url}/${product.id}`}>
                    {product.name}
                </Link>
            </li>
        );
    });
    return (
        <div>
            <div className='flex items-center justify-center'>
                <div>
                    <h3 className='text-3xl text-center'>Products</h3>
                    <ul className='divide-y divide-gray-200'>{linkList}</ul>
                </div>
            </div>
            <Route path={`${url}/:productId`}>
                <Product data={products} />
            </Route>
            <Route exact path={url}>
                <p>Please select a product.</p>
            </Route>
        </div>
    );
};

export default Products;
