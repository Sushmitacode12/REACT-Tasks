import React from "react";
import NewExpense from "./components/NewExpense/NewExpense";
import ExpenseItem from "./components/Expenses/ExpenseItem";
import "./App.css";


const App = (props) => {
  const expenses = [
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

   return (
   <div className="expenses">
    <NewExpense />
   <ExpenseItem
     id={expenses[0].id}
     title={expenses[0].title}
     amount={expenses[0].amount}
     date={expenses[0].date}
     //LocationofExpenditure={expenses[0].LocationofExpenditure}
   ></ExpenseItem>
  <ExpenseItem
     id={expenses[1].id}
     title={expenses[1].title}
     amount={expenses[1].amount}
     date={expenses[1].date}
     //LocationofExpenditure={expenses[1].LocationofExpenditure}
   ></ExpenseItem>
   <ExpenseItem
    id={expenses[2].id}
     title={expenses[2].title}
     amount={expenses[2].amount}
    date={expenses[2].date}
    //LocationofExpenditure={expenses[2].LocationofExpenditure}
  ></ExpenseItem>
   <ExpenseItem
   id={expenses[3].id}
    title={expenses[3].title}
     amount={expenses[3].amount}
      date={expenses[3].date}
       //LocationofExpenditure={expenses[3].LocationofExpenditure}
     ></ExpenseItem>
    </div>
 );
}

export default App;
