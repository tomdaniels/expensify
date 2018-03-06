import React from 'react';
import { Router, Route, Switch } from 'react-router-dom'
import createHistory from 'history/createBrowserHistory';
import LoginPage from '../components/login';
import ExpenseDashboardPage from '../components/dashboard';
import AddExpensePage from '../components/add-expense';
import EditExpensePage from '../components/edit-expense'
import NotFoundPage from '../components/error-page';
import HelpPage from '../components/help-page';
import PrivateRoute from './private-route';

export const history = createHistory();

const AppRouter = () => (
    <Router history={history}>
        <div>
            <Switch>
                <Route
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
                    path="/help"
                    component={HelpPage}
                />
                <Route
                    component={NotFoundPage}
                />
            </Switch>
        </div>
    </Router>
);

export default AppRouter;