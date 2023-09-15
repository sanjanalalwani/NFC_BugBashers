import React from "react";
import "../css/expense.css";
import Balance from "./Balance.jsx";
import { IncomeExpense } from "./IncomeExpense";
import { TransactionList } from "./TransactionList";
import { AddTransaction } from "./AddTransaction";
import { GlobalProvider } from "./GlobalState";



export default function Expense(){
    return(<>
    <div className="page">  
      <div className="info">
        <h1>Expense Tracker</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque quam repudiandae dolorem facere obcaecati sed ducimus repellendus adipisci facilis cum.</p>
      </div>
  <div className="dabba">
  <h2>Expense Tracker</h2>
  <div className="container">
    <Balance />
    <IncomeExpense/>
    <TransactionList />
    <AddTransaction/>
  </div>
  <GlobalProvider/>
</div>
</div>  
</>
    )
}