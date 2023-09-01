import React from "react";
import ExpenseItem from "./ExpenseItem";
import "./ExpensesList.css";

const ExpensesList = (props) => {
  if (props.items.length === 0) {
    return <h2 className="expenses-list__fallback">No expenses found.</h2>;
  }

  let deleteExpenseItemHandler = (id)=>{
    let items = props.items.filter(item => item.id !== id);
    props.setExpenses(items)
  }

  return (
    <ul className="expenses-list">
      {props.items.map((expense) => (
        <ExpenseItem
        key={expense.id}
        id={expense.id}
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
        deleteExpenseItem={deleteExpenseItemHandler}
        />
      ))}
    </ul>
  );
};

export default ExpensesList;
