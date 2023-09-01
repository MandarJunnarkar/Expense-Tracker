import React from "react";
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";
import Card from "../UI/Card";

function ExpenseItem(props) {
  return (
    <li>
      <Card className="expense-item">
        <ExpenseDate date={props.date} />
        <div className="expense-item__description">
          <h2>{props.title}</h2>
          <div className="expense-item__price">₹{props.amount}</div>
        </div>
        <div className="expense-item_delete" onClick={()=>props.deleteExpenseItem(props.id)}>Delete</div>
      </Card>
    </li>
  );
}

export default ExpenseItem;
