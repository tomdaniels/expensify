import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

export const PublicRoute = ({
        isAuthenticated,
        component: Component,
        ...rest
    }) => {
    const conditionalRender = (props) => (
        isAuthenticated ? (
            <Redirect to="/dashboard" />
        ) : (
            <Component {...props} />
        )
    );

    return (
        <div>
            <Route
                component={conditionalRender}
                {...rest}
            />
        </div>
    )
};

const mapStateToProps = (state) => ({
    isAuthenticated: !!state.auth.uid
});

export default connect(mapStateToProps)(PublicRoute);
