import React, {useState} from "react";
import './add-expense.component.css'
import ExpenseFormComponent from "./expense-form/expense-form.component";

const AddExpenseComponent = (props) => {
    const saveExpenseDataHandler = (enteredExpenseData) => {
     const   expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        }
        props.onAddExpense(expenseData);
     setIsEditing(false);
    }
   const [isEditing, setIsEditing] = useState(false);
    const startEditingHandler = () => {
        setIsEditing(true);
    }
    const stopEditingHandler = () => {
        setIsEditing(false);
    }
    return (
        <div className="new-expense">
            {!isEditing && <button onClick={startEditingHandler} type="button">Add New Expense</button>}
            {isEditing && <ExpenseFormComponent onCancel={stopEditingHandler} onSaveExpenseData={saveExpenseDataHandler}/>}
        </div>
    );
}

export default AddExpenseComponent;
