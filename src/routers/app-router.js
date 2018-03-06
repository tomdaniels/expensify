import React from 'react';
import { Router, Route, Switch } from 'react-router-dom'
import createHistory from 'history/createBrowserHistory';
import LoginPage from '../components/login';
import ExpenseDashboardPage from '../components/dashboard';
import AddExpensePage from '../components/add-expense';
import EditExpensePage from '../components/edit-expense'
import NotFoundPage from '../components/error-page';
import Header from '../components/header';

export const history = createHistory();

const AppRouter = () => (
    <Router history={history}>
        <div>
            <Header />
            <Switch>
                <Route
                    exact
                    path="/"
                    component={LoginPage}
                />
                <Route
                    path="/dashboard"
                    component={ExpenseDashboardPage}
                />
                <Route
                    path="/create"
                    component={AddExpensePage}
                />
                <Route
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