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
            <li key={product.id}>
                <Link to={`${url}/${product.id}`}>{product.name}</Link>
            </li>
        );
    });
    return (
        <div>
            <div>
                <div>
                    <h3>Products</h3>
                    <ul>{linkList}</ul>
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
