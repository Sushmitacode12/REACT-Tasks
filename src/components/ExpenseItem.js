import ExpenseDate from "./ExpenseDate";
import ExpenseDetails from "./ExpenseDetails";
import "./ExpenseItem.css";

function ExpenseItem(props) {
  
  return (
     <div className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
      <ExpenseDetails amount ={props.amount} />
        
      </div> 
    </div>
  );
  }

export default ExpenseItem;
