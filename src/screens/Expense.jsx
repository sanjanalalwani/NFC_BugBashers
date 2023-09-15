import React from "react";
import "../css/expense.css";
import Balance from "./Balance.jsx";
import { IncomeExpense } from "./IncomeExpense";
import { TransactionList } from "./TransactionList";
import { AddTransaction } from "./AddTransaction";
import { GlobalProvider } from "./GlobalState";



export default function Expense(){
    return(<>
        
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
</>
    )
}