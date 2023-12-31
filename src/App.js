import React, { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";


function App() {
  const [expenses, setExpenses] = useState([]);


  const addExpenseHandler = (expense) =>{
    setExpenses(prevExpenses =>{
      return [expense, ...prevExpenses];
    });
  };


  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler}/>
      <Expenses expenses={expenses} setExpenses={setExpenses}/>
    </div>
  );
}

export default App;