import { useState } from "react";
import RenderExpenses from "./components/Expenses/RenderExpenses";
import NewExpense from "./components/NewExpense/NewExpense";
import expenses from "./expenses";

function App() {
  const [allExpenses, setAllExpenses] = useState(expenses);

  const addExpenseHandler = (expense) => {
    setAllExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <RenderExpenses expenses={allExpenses} />
    </div>
  );
}

export default App;
