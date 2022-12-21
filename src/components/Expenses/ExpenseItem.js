
import Card from "../UI/Card";
import ExpenseDate from "./ExpenseDate";
import ExpenseDetails from "./ExpenseDetails";
import "./ExpenseItem.css";


const ExpenseItem = (props) => {
  const clickHandler = (id) => {
    console.log(id);
    const element = document.getElementById(id);
    element.remove();
  };

  return (

     <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <ExpenseDetails amount ={props.amount} />
      <ExpenseDetails amount ={props.title} />
    <Card></Card>  
      <div className="expense-item" id={props.id}>
      <ExpenseDate date={props.date} />
      <ExpenseDetails amount ={props.amount} />
      <ExpenseDetails amount ={props.title} />
      <button onAuxClick={ () => clickHandler(props.id)}>Delete Expenses</button>
      </div> 
    </Card>
  );
  };

export default ExpenseItem;