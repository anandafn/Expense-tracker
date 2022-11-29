import { useState } from "react";
import "./RenderExpenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import ExpenseChart from "./ExpenseChart";

const RenderExpenses = (props) => {
  const [filterYear, setFilterYear] = useState("2020");

  const filterChangeHandler = (selectedYear) => {
    setFilterYear(selectedYear);
  };

  const filterExpenses = props.expenses.filter((exp) => {
    return exp.date.getFullYear().toString() === filterYear;
  });

  console.log(filterExpenses);

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filterYear}
          onChangeFilter={filterChangeHandler}
        />
        <ExpenseChart expenses={filterExpenses} />
        <ExpensesList filterYear={filterYear} expenses={filterExpenses} />
      </Card>
    </div>
  );
};

export default RenderExpenses;
