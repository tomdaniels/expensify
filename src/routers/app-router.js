import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import ExpenseDashboardPage from '../components/dashboard';
import AddExpensePage from '../components/add-expense';
import EditExpensePage from '../components/edit-expense'
import NotFoundPage from '../components/error-page';
import Header from '../components/header';

const AppRouter = () => (
    <BrowserRouter>
        <div>
            <Header />
            <Switch>
                <Route
                    exact
                    path="/"
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
    </BrowserRouter>
);

export default AppRouter;