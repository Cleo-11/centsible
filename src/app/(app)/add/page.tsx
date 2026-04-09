"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { useTransactions } from "@/context/TransactionsContext";

const categoryOptions = [
  "Food & Dining",
  "Transport",
  "Shopping",
  "Bills & Utilities",
  "Entertainment",
  "Health & Fitness",
];

const categoryMeta: Record<string, { icon: string; bg: string }> = {
  "Food & Dining": { icon: "🍔", bg: "rgba(255,107,107,0.12)" },
  Transport: { icon: "🚕", bg: "rgba(253,203,110,0.12)" },
  Shopping: { icon: "🛒", bg: "rgba(108,92,231,0.12)" },
  "Bills & Utilities": { icon: "📱", bg: "rgba(255,107,107,0.12)" },
  Entertainment: { icon: "🎬", bg: "rgba(108,92,231,0.12)" },
  "Health & Fitness": { icon: "🏋️", bg: "rgba(0,210,160,0.12)" },
};

function formatDate(dateStr: string) {
  const d = new Date(dateStr + "T00:00:00");
  return d.toLocaleDateString("en-IN", { month: "short", day: "numeric" });
}

export default function AddTransactionPage() {
  const router = useRouter();
  const { addTransaction } = useTransactions();
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("Shopping");
  const [note, setNote] = useState("");
  const [date, setDate] = useState(new Date().toISOString().slice(0, 10));
  const [splitActive, setSplitActive] = useState(false);

  const handleSave = () => {
    const num = Number(amount);
    if (!num || num <= 0 || !note.trim()) return;
    const meta = categoryMeta[category] ?? { icon: "💳", bg: "rgba(108,92,231,0.12)" };
    const shortCat = category.split(" ")[0];
    addTransaction({
      icon: meta.icon,
      bg: meta.bg,
      name: note.trim(),
      detail: `${formatDate(date)} · ${shortCat}`,
      amount: `-₹${num.toLocaleString("en-IN")}`,
      type: "expense",
    });
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
