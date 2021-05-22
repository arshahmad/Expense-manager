import React from "react";
import './expenseItem.css'
import ExpenseDate from "./expenseDate";
import Card from "../UI/card";

const ExpenseItem = (props) => {
    return (
        <li>
        <Card className="expense-item">
            <ExpenseDate date={props.date}/>
            <div className="expense-item__description">
                <h2>{props.title}</h2>
                <div className="expense-item__price">${props.amount}</div>
            </div>
        </Card>
        </li>
    );
}

export default ExpenseItem;
