import 'react-dates/initialize';
import React from 'react';
import moment from 'moment';
import { SingleDatePicker } from 'react-dates';

class ExpenseForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            description: props.expense ? props.expense.description : '',
            note: props.expense ? props.expense.note : '',
            amount: props.expense ? (props.expense.amount / 100).toString() : '',
            createdAt: props.expense ? moment(props.expense.createdAt) : moment(),
            isRecurring: props.expense ? props.expense.isRecurring : false,
            calendarFocused: false,
            errorState: ''
        }
    }

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

    toggleRecurring = () => {
        this.setState((prevState) => ({
            isRecurring: !prevState.isRecurring,
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
            this.props.onSubmit({
                description: this.state.description,
                amount: parseFloat(this.state.amount) * 100,
                createdAt: this.state.createdAt.valueOf(),
                note: this.state.note,
                isRecurring: this.state.isRecurring,
            });
        }
    };

    render() {
        return (
          <form className="form" onSubmit={this.onSubmit}>
              {
                  this.state.errorState &&
                  <p className="form__error">{this.state.errorState}</p>
              }
              <input
                  type="text"
                  placeholder="Description"
                  className="text-input"
                  autoFocus
                  value={this.state.description}
                  onChange={this.onDescriptionChange}
              />
              <input
                  value={this.state.amount}
                  className="text-input"
                  type="text"
                  placeholder="Amount"
                  onChange={this.onAmountChange}
              />
              <input
                  type="checkbox"
                  selected="selected"
                  onClick={this.toggleRecurring}
              />
              <SingleDatePicker
                  date={this.state.createdAt}
                  onDateChange={this.onDateChange}
                  focused={this.state.calendarFocused}
                  onFocusChange={this.onFocusChange}
                  numberOfMonths={1}
                  isOutsideRange={() => false}
                  block
              />
              <textarea
                  className="text-area"
                  value={this.state.note}
                  onChange={this.onNoteChange}
                  placeholder="Add a note for your expense (optional)"
              >
              </textarea>
              <div>
                  <button className="button">
                      {
                          this.props.expense ? 'Save Expense' : 'Add Expense'
                      }
                  </button>
              </div>
          </form>
        );
    }
}

export default ExpenseForm;