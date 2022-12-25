import React from "react";
import Card from "../UI/Card";
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";


const ExpenseItem = (props) => {
  // function clickhandler() {}
  //const [amount, setAmount] = useState(props.amount);
  //console.log('ExpenseItem');
  
  // const clickHandler = () => {
  //   setAmount('$100');
  //   console.log(amount);
  // };

  return (
    <li>
    <Card className="expense-item" >
      <ExpenseDate date={props.date} /> 
      <div className="expense-item_description">
            <h2>{props.title}</h2>
            <div className="expense-item__price">{props.amount}</div>
          </div>  
        </Card>
      </li>  
    );
  };

export default ExpenseItem;