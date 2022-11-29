import "./ExpensesList.css";
import ExpenseItem from "./ExpenseItem";

const ExpensesList = (props) => {
  if (props.expenses.length === 0) {
    return (
      <h2 className="expenses-list__fallback">
        You Have No Expenses on {props.filterYear}
      </h2>
    );
  }

  return (
    <ul className="expenses-list">
      {props.expenses.map((exp, i) => {
        return (
          <ExpenseItem
            key={i}
            id={exp.id}
            date={exp.date}
            title={exp.title}
            amount={exp.amount}
          />
        );
      })}
    </ul>
  );
};

export default ExpensesList;
