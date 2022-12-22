import React, {useState} from "react";
import Card from "../UI/Card";
import ExpenseDate from "./ExpenseDate";
import ExpenseDetails from "./ExpenseDetails";
import "./ExpenseItem.css";


const ExpenseItem = (props) => {
  // function clickhandler() {}
  const [amount, setAmount] = useState(props.amount);
  //console.log('ExpenseItem');
  
  const clickHandler = () => {
    setAmount('$100');
    console.log(amount);
  };

  return (
    <Card>
      <div className="expense-item" >
      <ExpenseDate date={props.date} />
      <ExpenseDetails amount ={props.amount} />
      <ExpenseDetails amount ={props.title} />
      <button onClick={clickHandler}>change amount</button>
      </div> 
    </Card>
  );
  };

export default ExpenseItem;