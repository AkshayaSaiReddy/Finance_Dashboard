import React, { useState, useEffect } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import BalanceCard from "./components/BalanceCard";
import ExpenseChart from "./components/ExpenseChart";
import TransactionList from "./components/TransactionList";

function App() {
  // 🔥 Load from localStorage
  const [transactions, setTransactions] = useState(() => {
    const saved = localStorage.getItem("transactions");
    return saved ? JSON.parse(saved) : [];
  });

  // 🔥 Save to localStorage whenever data changes
  useEffect(() => {
    localStorage.setItem("transactions", JSON.stringify(transactions));
  }, [transactions]);

  return (
    <div>
      <Navbar />
      <div className="container">
        <BalanceCard transactions={transactions} />
        <ExpenseChart transactions={transactions} />
        <TransactionList
          transactions={transactions}
          setTransactions={setTransactions}
        />
      </div>
    </div>
  );
}

export default App;