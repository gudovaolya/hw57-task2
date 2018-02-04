import React from 'react';
import './Report.css';

const Report = (props) => {

    const expense = props.expense;

    let expenseComponent = expense.reduce((acc, item, index) => {
        acc[index] = (
            <div className="report-row" key={item.id}>
                <span className="report-title">{item.title}</span>
                <span className="report-price">{item.cost} KGS</span>
                <button className="report-delete" onClick={() => props.remove(item.id)}>x</button>
            </div>
        );
        return acc;
    }, []);

    return (
       <div className="report-block">
           {expenseComponent}
        </div>
    )
};

export default Report;