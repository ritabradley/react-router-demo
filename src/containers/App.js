import React from 'react';
import Navbar from '../components/Navbar';
import Home from '../components/Home';
import Category from '../components/Category';
import Products from '../components/Products';
import { Route, Switch } from 'react-router-dom';

const App = () => {
    return (
        <div>
            <Navbar />
            <Switch>
                <Route exact path='/'>
                    <Home />
                </Route>
                <Route path='/category'>
                    <Category />
                </Route>
                <Route path='/products'>
                    <Products />
                </Route>
            </Switch>
        </div>
    );
};

export default App;
