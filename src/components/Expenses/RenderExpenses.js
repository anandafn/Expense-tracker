import "./RenderExpenses.css";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import expenses from "../../expenses";

const RenderExpenses = () => {
  return (
    <Card className="expenses">
      {expenses.map((exp, i) => {
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
    </Card>
  );
};

export default RenderExpenses;
