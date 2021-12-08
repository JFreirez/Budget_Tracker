import { useState } from 'react';
import logo from "./logo.svg";
import ExpenseDisplay from "./components/ExpenseDisplay";
import NewExpense from "./components/NewExpense/NewExpense";
import "./App.css";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 10, 14),
  },
  {
    id: "e2",
    title: "New TV",
    amount: 799.49,
    date: new Date(2021, 2, 12),
  },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

function App() {
  const[expenses, setExpenses]= useState(DUMMY_EXPENSES);


  const addExpenseHandler = (newExpense) => {
    console.log(newExpense);
    setExpenses(prevExpenses => {
      return([newExpense, ...prevExpenses]);
    });
  };
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <NewExpense onCollectNewExpense={addExpenseHandler} />
        <ExpenseDisplay expensesList={expenses} />

        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
