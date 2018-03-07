import React from 'react';
import { connect } from 'react-redux';
import Modal from 'react-modal';
import ExpenseForm from './expense-form';
import { startEditExpenses, startRemoveExpense } from '../actions/expenses';

export class EditExpensePage extends React.Component {
    state = {
      removeClick: false
    };
    onSubmit = (expense) => {
        this.props.startEditExpenses(this.props.expense.id, expense);
        this.props.history.push('/');
    };

    onRemove = () => {
        this.setState((prevState) => ({
            removeClick: !prevState.removeClick,
        }));
    };

    handleRemoveConfirm = () => {
        this.props.startRemoveExpense({id: this.props.expense.id});
        this.props.history.push('/');
    };

    handleRemoveCancel = () => {
        this.setState((prevState) => ({
            removeClick: !prevState.removeClick,
        }));
    };

    render() {
        return (
            <div>
                <div className="page-header">
                    <div className="content-container">
                        <h1 className="page_header__title">Edit Expense</h1>
                    </div>
                </div>
                <div className="content-container">
                    <ExpenseForm
                        expense={this.props.expense}
                        onSubmit={this.onSubmit}
                    />
                    <button className="button button--secondary" onClick={this.onRemove}>Remove Expense</button>
                    <Modal
                        isOpen={this.state.removeClick}
                        onRequestClose={this.handleRemoveCancel}
                        contentLabel="Confirm remove"
                        closeTimeoutMS={200}
                        className="modal"
                        ariaHideApp={false}
                    >
                        <p className="modal__title">Are you sure you want to remove this expense?</p>
                        <div className="modal__button-wrap">
                            <button className="button button--link" onClick={this.handleRemoveConfirm}>Yes</button>
                            <button className="button button--link" onClick={this.handleRemoveCancel}>No</button>
                        </div>
                    </Modal>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state, props) => ({
    expense: state.expenses.find((expense) =>
        expense.id === props.match.params.id
    )
});

const mapDispatchToProps = (dispatch, props) => ({
    startEditExpenses: (id, expense) => dispatch(startEditExpenses(id, expense)),
    startRemoveExpense: (data) => dispatch(startRemoveExpense(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(EditExpensePage);