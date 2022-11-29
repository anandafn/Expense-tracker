// import { useState } from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
// import RenderExpenses from "../Expenses/RenderExpenses";

const NewExpense = (props) => {
  const saveExpenseHandler = (inputExpense) => {
    const expenseData = {
      ...inputExpense,
      id: Math.random().toString(),
    };

    props.onAddExpense(expenseData);
  };

  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpense={saveExpenseHandler} />
    </div>
  );
};

export default NewExpense;
