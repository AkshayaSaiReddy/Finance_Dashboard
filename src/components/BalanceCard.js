import React, { useState, useEffect } from "react";

function BalanceCard({ transactions }) {
  const balance = transactions.reduce((acc, t) => acc + t.amount, 0);

  const [currentTime, setCurrentTime] = useState(new Date());

  // 🔥 Update time every second
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const date = currentTime.toLocaleDateString("en-GB");
  const time = currentTime.toLocaleTimeString("en-IN", {
    hour: "2-digit",
    minute: "2-digit"
  });

  return (
    <div className="card balance-card">
      <h3>Available Balance</h3>
      <h1>₹ {balance}</h1>

      {/* 🔥 Date & Time in UI */}
      <p style={{ marginTop: "10px", opacity: 0.9 }}>
        📅 {date} | ⏰ {time}
      </p>
    </div>
  );
}

export default BalanceCard;