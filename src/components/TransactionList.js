import React, { useState } from "react";

function TransactionList({ transactions, setTransactions }) {
  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");
  const [editId, setEditId] = useState(null);
  const [filterDate, setFilterDate] = useState("");

  // ➕ ADD or ✏️ UPDATE
  const handleSubmit = () => {
    if (!name || !amount) return;

    if (editId) {
      // UPDATE
      const updated = transactions.map((t) =>
        t.id === editId ? { ...t, name, amount: Number(amount) } : t
      );
      setTransactions(updated);
      setEditId(null);
    } else {
      // ADD
      const newTransaction = {
        id: Date.now(),
        name,
        amount: Number(amount),
        date: new Date().toLocaleString()
      };
      setTransactions([...transactions, newTransaction]);
    }

    setName("");
    setAmount("");
  };

  // ❌ DELETE
  const deleteTransaction = (id) => {
    setTransactions(transactions.filter((t) => t.id !== id));
  };

  // ✏️ EDIT
  const editTransaction = (t) => {
    setName(t.name);
    setAmount(t.amount);
    setEditId(t.id);
  };

  return (
    <div className="card">
      <h3>Transactions</h3>

      <input
        type="text"
        placeholder="Enter name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <input
        type="number"
        placeholder="Enter amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />

      <button onClick={handleSubmit}>
        {editId ? "Update" : "Add"}
      </button>

    <input
  type="date"
  value={filterDate}
  onChange={(e) => setFilterDate(e.target.value)}
/>
      <ul>
  {transactions
    .filter((t) => {
      if (!filterDate) return true;

      const transactionDate = new Date(t.date)
        .toISOString()
        .split("T")[0];

      return transactionDate === filterDate;
    })
    .map((t) => (
      <li key={t.id}>
        <div>
          <strong>{t.name}</strong><br />
          <small className={t.amount > 0 ? "income" : "expense"}>
            ₹ {t.amount}
          </small><br />
          <small style={{ color: "gray" }}>
            {t.date}
          </small>
        </div>

        <div>
          <button onClick={() => editTransaction(t)}>✏️</button>
          <button onClick={() => deleteTransaction(t.id)}>🗑️</button>
        </div>
      </li>
    ))}
</ul>
    </div>
  );
}

export default TransactionList;