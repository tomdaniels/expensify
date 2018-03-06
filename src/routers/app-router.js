import React from 'react';
import { Router, Route, Switch } from 'react-router-dom'
import createHistory from 'history/createBrowserHistory';
import LoginPage from '../components/login';
import ExpenseDashboardPage from '../components/dashboard';
import AddExpensePage from '../components/add-expense';
import EditExpensePage from '../components/edit-expense'
import NotFoundPage from '../components/error-page';
import PrivateRoute from './private-route';
import PublicRoute from './public-route';

export const history = createHistory();

const AppRouter = () => (
    <Router history={history}>
        <div>
            <Switch>
                <PublicRoute
                    exact
                    path="/"
                    component={LoginPage}
                />
                <PrivateRoute
                    path="/dashboard"
                    component={ExpenseDashboardPage}
                />
                <PrivateRoute
                    path="/create"
                    component={AddExpensePage}
                />
                <PrivateRoute
                    path="/edit/:id"
                    component={EditExpensePage}
                />
                <Route
                    component={NotFoundPage}
                />
            </Switch>
        </div>
    </Router>
);

export default AppRouter;