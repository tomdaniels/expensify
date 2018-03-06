import React from 'react';
import { connect } from 'react-redux';
import { startLogin } from '../actions/auth';

export const LoginPage = ({ startLogin }) => (
    <div className="login-page__box-layout">
        <div className="login-page__box">
            <h1 className="login-page__title">Expensify</h1>
            <p>It's time to get your expenses under control</p>
            <button onClick={startLogin}>Login</button>
        </div>
    </div>
);

const mapDispatchToProps = (dispatch) => ({
  startLogin: () => dispatch(startLogin())
});

export default connect(undefined, mapDispatchToProps)(LoginPage);