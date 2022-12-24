import React, { useState} from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
//import ExpenseItem from "./components/Expenses/ExpenseItem";
//import "./App.css";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "Car Insurance",
    amount: "Rs 4600",
    date: new Date(2022, 7, 16),
    LocationofExpenditure: "Surat",
  },
  {
    id: "e2",
    title: "Food",
    amount: "Rs 2500",
    date: new Date(2022, 2, 28),
    LocationofExpenditure: "Mumbai",
  },
  {
    id: "e3",
    title: "Movies",
    amount: "Rs 1500",
    date: new Date(2022, 8, 25),
    LocationofExpenditure: "Banglore",
  },
  {
    id: "e4",
    title: "Petrol",
    amount: "Rs 600",
    date: new Date(2022, 5, 11),
    LocationofExpenditure: "Ahmedabad",
  },
];

const App = (props) => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpensehandler = expenses => {
    setExpenses(prevExpenses => {
      return [expenses, ...prevExpenses]
    });
  };
  // return React.createElement(
  //   'div',
  //   {},
  //   React.createElement('h2', {}, "Let's get started!"),
  //   React.createElement(Expenses, { items: expenses })
  // );

   return (
   <div>
    <NewExpense onAddExpense={addExpensehandler}/>
    <Expenses items={expenses} />
    </div>
 );
}

export default App;
