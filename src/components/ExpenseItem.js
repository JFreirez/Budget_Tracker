import React from "react";
import "./ExpenseItem.css";
import Card from "./Card";
import ExpenseDate from "./ExpenseDate";

function ExpenseItem(props) {
  return (
    <li>
      <Card className="expense-item">
        <ExpenseDate date={props.date} />
        <div className="expense-item-description">
          <h2>{props.title}</h2>
          <div className="expense-item-price">${props.amount}</div>
        </div>
      </Card>
    </li>
  );
}

export default ExpenseItem;
