import React from 'react';

class ExpenseForm extends React.Component {
    state = {
      description: '',
        note: '',
        amount: ''
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