import React from 'react';
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';
import Login from '../pages/Login/index';
import Webinar from '../pages/Webinar/index';

const Routes: React.FC = () => {
    return (
        <Router>
            <Switch>
                <Route path="/" exact component={Login} />
                <Route path="/login" component={Login} />
                <Route path="/webinar" component={Webinar} />
            </Switch>
        </Router>
    )
}

export default Routes;