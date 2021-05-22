import Expenses from "./components/expenses/expenses";
import AddExpenseComponent from "./components/newExpense/add-expense.component";
import React, {useState} from "react";

const DUMMY_EXPENSES = [
    {
        id: 'e1',
        title: 'Toilet Paper',
        amount: 94.12,
        date: new Date(2020, 7, 14),
    },
    {id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12)},
    {
        id: 'e3',
        title: 'Car Insurance',
        amount: 294.67,
        date: new Date(2021, 2, 28),
    },
    {
        id: 'e4',
        title: 'New Desk (Wooden)',
        amount: 450,
        date: new Date(2021, 5, 12),
    },
];

const App = () => {

    const[expenses, setExpenses] = useState(DUMMY_EXPENSES)

    const addExpenseHandler = expenseData => {
        console.log('inside app js', expenseData);
        setExpenses(previousExpenses => {
           return [expenseData, ...previousExpenses]
        });
    }

    return (
        <div>
            <AddExpenseComponent onAddExpense={addExpenseHandler}/>
            <Expenses expenses={expenses}/>
        </div>
    );
}

export default App;
