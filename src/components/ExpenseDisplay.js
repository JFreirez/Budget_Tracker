import ExpenseItem from "./ExpenseItem";

function ExpenseDisplay(props) {
  let i = 0;
  let container = [];

  let printExpenses = () => {
    while (i < props.expensesList.length) {
      container.push(
        <ExpenseItem
          title={props.expensesList[i].title}
          amount={props.expensesList[i].amount}
          date={props.expensesList[i].date}
        />
      );
      i++;
    }
    return container;
  };

  return printExpenses();
}

export default ExpenseDisplay;
