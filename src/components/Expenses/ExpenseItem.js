import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";
import Card from "../UI/Card";
import { useState } from "react";

const ExpenseItem = (props) => {
  const [update, setUpdate] = useState("Change");

  function handClick() {
    setUpdate("updated");
  }

  return (
    <li>
      <Card className="expense-item">
        <ExpenseDate date={props.date} />
        <div className="expense-item__description">
          <h2>{props.title}</h2>
          <div className="expense-item__price">${props.amount}</div>
        </div>
        <button onClick={handClick}>{update}</button>
      </Card>
    </li>
  );
};

export default ExpenseItem;
