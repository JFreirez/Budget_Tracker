//Need to Style
import "./ExpenseDate.css";
function ExpenseDate(props) {
  const month = props.date.toLocaleString("en-US", { month: "long" });
  const day = props.date.toLocaleString("en-US", { day: "numeric" });
  const year = props.date.toLocaleString("en-US", { year: "numeric" });

  return (
    <div className="date-container">
      <div className="content">
        <div className="month">{month}</div>
        <div className="year">{year}</div>
        <div className="day">{day}</div>
      </div>
    </div>
  );
}

export default ExpenseDate;
