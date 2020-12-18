import React from 'react';
import { Link, Route, useParams, useRouteMatch } from 'react-router-dom';

const Item = () => {
    const { name } = useParams();
    return (
        <div>
            <h3>{name}</h3>
        </div>
    );
};

const Category = () => {
    const { url, path } = useRouteMatch();
    return (
        <div>
            <ul className='divide-y divide-gray-200'>
                <li className='flex py-4 ml-3'>
                    <Link className='text-sm font-medium text-gray-900' to={`${url}/shoes`}>
                        Shoes
                    </Link>
                </li>
                <li className='flex py-4 ml-3'>
                    <Link className='text-sm font-medium text-gray-900' to={`${url}/boots`}>
                        Boots
                    </Link>
                </li>
                <li className='flex py-4 ml-3'>
                    <Link className='text-sm font-medium text-gray-900' to={`${url}/footwear`}>
                        Footwear
                    </Link>
                </li>
            </ul>
            <Route path={`${path}/:name`}>
                <Item />
            </Route>
        </div>
    );
};

export default Category;
