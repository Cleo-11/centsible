"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

const categoryOptions = [
  "Food & Dining",
  "Transport",
  "Shopping",
  "Bills & Utilities",
  "Entertainment",
  "Health & Fitness",
];

export default function AddTransactionPage() {
  const router = useRouter();
  const [amount, setAmount] = useState("750");
  const [category, setCategory] = useState("Shopping");
  const [note, setNote] = useState("New headphones");
  const [date, setDate] = useState("2026-04-08");
  const [splitActive, setSplitActive] = useState(true);

  const handleSave = () => {
    router.push("/transactions");
  };

  return (
    <>
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="font-heading text-[26px] font-bold">Add Expense</h1>
        <button
          onClick={() => router.push("/transactions")}
          className="text-[22px] text-dim cursor-pointer bg-transparent border-none"
        >
          ✕
        </button>
      </div>

      {/* Form */}
      <div className="input-group">
        <label>Amount (₹)</label>
        <input
          type="number"
          placeholder="0.00"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
      </div>
      <div className="input-group">
        <label>Category</label>
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          {categoryOptions.map((opt) => (
            <option key={opt} value={opt}>
              {opt}
            </option>
          ))}
        </select>
      </div>
      <div className="input-group">
        <label>Note</label>
        <input
          type="text"
          placeholder="What was this for?"
          value={note}
          onChange={(e) => setNote(e.target.value)}
        />
      </div>
      <div className="input-group">
        <label>Date</label>
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
      </div>

      {/* Quick Actions */}
      <div className="flex gap-2 mb-6 flex-wrap">
        <span className="pill cursor-pointer">🔁 Recurring</span>
        <span className="pill cursor-pointer">📸 Add Receipt</span>
        <span
          className={`pill cursor-pointer ${splitActive ? "pill-active" : ""}`}
          onClick={() => setSplitActive(!splitActive)}
        >
          🏷️ Split Bill
        </span>
      </div>

      <button className="btn btn-primary" onClick={handleSave}>
        Save Transaction
      </button>
      <button
        className="btn btn-ghost mt-4"
        onClick={() => router.push("/transactions")}
      >
        Cancel
      </button>
    </>
  );
}
