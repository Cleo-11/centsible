"use client";

import Link from "next/link";
import { useState } from "react";

const categories = ["All", "Food", "Transport", "Shopping", "Bills"];

const transactions = [
  { icon: "🍔", bg: "rgba(255,107,107,0.12)", name: "Swiggy Order", detail: "Today, 8:32 PM · Food", amount: "-₹486", type: "expense" },
  { icon: "💸", bg: "rgba(0,210,160,0.12)", name: "Freelance Payment", detail: "Today, 2:00 PM · Income", amount: "+₹12,000", type: "income" },
  { icon: "🚕", bg: "rgba(253,203,110,0.12)", name: "Uber Ride", detail: "Yesterday · Transport", amount: "-₹234", type: "expense" },
  { icon: "🛒", bg: "rgba(108,92,231,0.12)", name: "Amazon", detail: "Apr 5 · Shopping", amount: "-₹2,199", type: "expense" },
  { icon: "📱", bg: "rgba(255,107,107,0.12)", name: "Jio Recharge", detail: "Apr 4 · Bills", amount: "-₹299", type: "expense" },
  { icon: "💰", bg: "rgba(0,210,160,0.12)", name: "Salary Credit", detail: "Apr 1 · Income", amount: "+₹45,000", type: "income" },
  { icon: "☕", bg: "rgba(253,203,110,0.12)", name: "Starbucks", detail: "Mar 31 · Food", amount: "-₹580", type: "expense" },
  { icon: "🏋️", bg: "rgba(108,92,231,0.12)", name: "Gym Membership", detail: "Mar 30 · Health", amount: "-₹3,500", type: "expense" },
];

export default function TransactionsPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered = activeCategory === "All"
    ? transactions
    : transactions.filter((tx) =>
        tx.detail.toLowerCase().includes(activeCategory.toLowerCase())
      );

  return (
    <>
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="font-heading text-[26px] font-bold">Transactions</h1>
        <Link
          href="/add"
          className="btn btn-primary !w-auto !py-2.5 !px-[18px] !text-[13px]"
        >
          + Add
        </Link>
      </div>

      {/* Category Filter */}
      <div className="flex gap-2 mb-5 overflow-x-auto pb-1">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`pill ${activeCategory === cat ? "pill-active" : ""}`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Transaction List */}
      <div>
        {filtered.map((tx, i) => (
          <div key={i} className="tx-row">
            <div className="tx-icon" style={{ background: tx.bg }}>
              {tx.icon}
            </div>
            <div className="tx-info">
              <p>{tx.name}</p>
              <span>{tx.detail}</span>
            </div>
            <div
              className={`tx-amount ${
                tx.type === "income" ? "text-success" : "text-danger"
              }`}
            >
              {tx.amount}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
