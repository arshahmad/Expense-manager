import React, {useState} from "react";
import './expenses.css';
import Card from '../UI/card'
import ExpensesFilter from "./expensesFilter";
import ExpensesList from "./expensesList";
import ExpensesChart from "./expensesChart";

const Expenses = (props) => {

    const [filteredYear, setFilteredYear] = useState('2020');
    const filterChangeHandler = (changedData) => {
        setFilteredYear(changedData);
    }
    const filtered_expenses = props.expenses.filter(expense => expense.date.getFullYear().toString() === filteredYear);


    return (
        <Card className="expenses">
            <ExpensesFilter selected={filteredYear} onFilterChange={filterChangeHandler}/>
            <ExpensesChart expenses={filtered_expenses}/>
            <ExpensesList items={filtered_expenses}/>
        </Card>
    )

}

export default Expenses;
