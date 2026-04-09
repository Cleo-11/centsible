"use client";

import Link from "next/link";
import { useState } from "react";
import { useTransactions } from "@/context/TransactionsContext";

const categories = ["All", "Food", "Transport", "Shopping", "Bills"];

export default function TransactionsPage() {
  const { transactions } = useTransactions();
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
