import { useState } from 'react';
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  //used to set form visibility
  const[visibleForm, setFormState] = useState(false);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onCollectNewExpense(expenseData);
    setFormState(false);
  };

  const showForm = () => {
    setFormState(true);
  }
  const hideForm = () => {
    setFormState(false);
  }
    
  return (
      <div className="new-expense">
        {!visibleForm && <button onClick={showForm}>Add New Expense</button>}
        {visibleForm && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={hideForm}/>}
      </div>
  );
};
export default NewExpense;
