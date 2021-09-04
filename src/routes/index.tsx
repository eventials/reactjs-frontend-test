import React, { useContext } from 'react';
import { Switch, BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import { AuthProvider, Context } from '../Context/AuthContext';
import Login from '../pages/login/index';
import Webnar from '../pages/webnar/index';

interface IPrivateRoute {
    path: string;
    component: React.FC<{}>
}

const PrivateRoute: React.FC<IPrivateRoute> = ({path, component}) => {
    const { authenticated } = useContext(Context)

    if (authenticated) {
        return <Route path={path} component={component} />
    } else {
        return <Redirect to="/login" />
    }

}

const Routes: React.FC = () => {
    return (
        <AuthProvider>
            <Router>
                <Switch>
                    <Route path="/login" component={Login} />
                    <PrivateRoute path="/webnar" component={Webnar} />
                </Switch>
            </Router>
        </AuthProvider>
    )
}

export default Routes;