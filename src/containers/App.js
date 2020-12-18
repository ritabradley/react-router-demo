import React from 'react';
import Navbar from '../components/Navbar';
import Home from '../components/Home';
import Category from '../components/Category';
import Products from '../components/Products';
import PrivateRoute from '../components/PrivateRoute';
import Admin from '../components/Admin';
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
                <PrivateRoute path='/admin' component={Admin} />
            </Switch>
        </div>
    );
};

export default App;
