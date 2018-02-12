import 'react-dates/initialize';
import React from 'react';
import moment from 'moment';
import { SingleDatePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';

class ExpenseForm extends React.Component {
    state = {
      description: '',
        note: '',
        amount: '',
        createdAt: moment(),
        calendarFocused: false,
        errorState: ''
    };
    onDescriptionChange = (e) => {
      const description = e.target.value;
      this.setState(() => ({
          description
      }));
    };

    onNoteChange = (e) => {
        const note = e.target.value;
        this.setState(() => ({
            note
        }));
    };

    onAmountChange = (e) => {
      const amount = e.target.value;

      if (!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
          this.setState(() => ({
              amount
          }));
      }
    };

    onDateChange = (createdAt) => {
        if (createdAt) {
            this.setState(() => ({
                createdAt
            }));
        }
    };

    onFocusChange = ({ focused }) => {
        this.setState(() => ({
            calendarFocused: focused
        }));
    };

    onSubmit = (event) => {
        event.preventDefault();

        if (!this.state.description || !this.state.amount) {
            this.setState(() => ({
                errorState: 'Please provide description and amount.'
            }));
        } else {
            this.setState(() => ({
                errorState: ''
            }));
            console.log('submit');
        }
    };

    render() {
        return (
          <div>
              {
                  this.state.errorState &&
                      <p>{this.state.errorState}</p>
              }
              <form onSubmit={this.onSubmit}>
                  <input
                      type="text"
                      placeholder="Description"
                      autoFocus
                      value={this.state.description}
                      onChange={this.onDescriptionChange}
                  />
                  <input
                      value={this.state.amount}
                      type="text"
                      placeholder="Amount"
                      onChange={this.onAmountChange}
                  />
                  <SingleDatePicker
                      date={this.state.createdAt}
                      onDateChange={this.onDateChange}
                      focused={this.state.calendarFocused}
                      onFocusChange={this.onFocusChange}
                      numberOfMonths={1}
                      isOutsideRange={() => false}
                  />
                  <textarea
                      value={this.state.note}
                      onChange={this.onNoteChange}
                      placeholder="Add a note for your expense (optional)"
                  >
                  </textarea>
                  <button>Add Expense</button>
              </form>
          </div>
        );
    }
}

export default ExpenseForm;