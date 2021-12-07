import { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import ExpenseFilter from "../components/Filter/ExpenseFilter";
import "./ExpensesDisplay.css";

function ExpenseDisplay(props) {
  const [filterYear, setFilteredYear] = useState("2021");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.expensesList.filter((expense) => {
    return expense.date.getFullYear().toString() === filterYear;
  });

  let expensesContent =  <p>No expenses found.</p>;
  
  if (filteredExpenses.length > 0){
    expensesContent = filteredExpenses.length > 0 &&
    filteredExpenses.map((expense) => (
      <ExpenseItem
        key={expense.id}
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
      />
    ))
  }

  return (
    <div className="lower-half-container">
      <div className="expense-filter">
        <ExpenseFilter
          selected={filterYear}
          onChangeFilter={filterChangeHandler}
        />
        {expensesContent}
      </div>
    </div>
  );
}

export default ExpenseDisplay;
