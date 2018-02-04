import React, {Component} from 'react';
import Wrapper from "../../hoc/Wrapper";
import Report from "../../components/Report/Report"
import ReportForm from "../../components/ReportForm/ReportForm";


class ReportBuilder extends Component {

    state = {
        expense: [],
        totalSpent: 0
    };

    getTotalSpent = () => {
        const expense = this.state.expense;
        const totalSpent = expense.map(item => {
            return parseInt((item.cost),10);
        }).reduce((acc, item) => {
            return acc + item;
        },0);

        return totalSpent;
    };

    addExpense = () => {

        const title = document.getElementById('reportTitle').value;
        const cost = document.getElementById('reportCost').value;

        if (title !== '' && cost !== '' && !isNaN(cost)) {
            const expense = [...this.state.expense];
            const expenseItem = {};
            expenseItem.title = title;
            expenseItem.cost = cost;
            expenseItem.id = 'ex' + Math.random().toString(36).substr(2, 9);
            expense.push(expenseItem);
            this.setState({expense});
        } else {
            alert('You entered incorrect data!');
        }
    };

    removeExpense = (id) => {
        const index = this.state.expense.findIndex(item => item.id === id);
        const expense = [...this.state.expense];
        expense.splice(index, 1);
        this.setState({expense});
    };

    render() {
        return (
            <Wrapper>
                <h2>Журнал расходов</h2>
                <ReportForm
                    click = {this.addExpense}
                />
                <Report
                    expense={this.state.expense}
                    remove={this.removeExpense}
                />
                <div className="tottal-spent">Total spent: {this.getTotalSpent()}</div>
            </Wrapper>
        )
    }
}

export default ReportBuilder;