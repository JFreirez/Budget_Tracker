import { useState } from "react";
import ExpenseFilter from "../components/Filter/ExpenseFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";
import "./ExpenseDisplay.css";

function ExpenseDisplay(props) {
  const [filterYear, setFilteredYear] = useState("2021");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  //.filter() creates a new array and wont delete the old one.
  //the syntax to grab the year is important since we are comparing a string filter year
  const filteredExpenses = props.expensesList.filter((expense) => {
    return expense.date.getFullYear().toString() === filterYear;
  });

  return (
    <div className="lower-half-container">
      <div className="expense-filter">
        <ExpenseFilter
          selected={filterYear}
          onChangeFilter={filterChangeHandler}
        />
        <ExpensesChart expenses={filteredExpenses}/>
        <ExpensesList items={filteredExpenses} />
      </div>
    </div>
  );
}

export default ExpenseDisplay;
