import React from 'react';
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';
import Login from '../pages/login/index';
import Webnar from '../pages/webnar/index';

const Routes: React.FC = () => {
    return (
        <Router>
            <Switch>
                <Route path="/" exact component={Login} />
                <Route path="/login" component={Login} />
                <Route path="/webnar" component={Webnar} />
            </Switch>
        </Router>
    )
}

export default Routes;