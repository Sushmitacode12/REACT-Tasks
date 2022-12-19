import Card from "../UI/Card";
import ExpenseDate from "./ExpenseDate";
import ExpenseDetails from "./ExpenseDetails";
import "./ExpenseItem.css";


function ExpenseItem(props) {
  
  return (
    
     <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description"></div>
            <h2>{props.title}</h2>
      <div className="expense-item__description">
      <ExpenseDetails amount ={props.amount} />
        
      </div> 
    </Card>
  );
  }

export default ExpenseItem;
