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
        calendarFocused: false
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

      if (amount.match(/^\d*(\.\d{0,2})?$/)) {
          this.setState(() => ({
              amount
          }));
      }
    };

    onDateChange = (createdAt) => {
        this.setState(() => ({
            createdAt
        }));
    };

    onFocusChange = ({ focused }) => {
        this.setState(() => ({
            calendarFocused: focused
        }));
    };

    render() {
        return (
          <div>
              <form>
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