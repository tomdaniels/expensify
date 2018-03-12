import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import numeral from 'numeral';
import Icon from 'react-icons/lib/fa/calendar';

const ExpenseListItem = ({ id, description, amount, createdAt, isRecurring }) => (
    <Link
        className="list-item"
        to={`/edit/${id}`}
    >
        <div>
            <h3 className="list-item__title">{description}</h3>
            {
                isRecurring &&
                        <Icon
                            className="list-item__recurring-icon"
                            data-tip="test"
                        />
            }
            <span className="list-item__subtitle">{moment(createdAt).format('Do MMMM, YYYY')}</span>
            {
                isRecurring &&
                <p className="list-item__recurring">
                            recurring expense
                        </p>
            }
        </div>
        <div>
            <h3 className="list-item__data">{numeral(amount / 100).format('$0,0.00')}</h3>
        </div>
    </Link>
);



export default ExpenseListItem;