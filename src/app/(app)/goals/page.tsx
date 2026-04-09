"use client";

import { useState } from "react";

interface Goal {
  emoji: string;
  name: string;
  current: number;
  target: number;
  badgeLabel: string;
  badgeClass: string;
  barColor: string;
  gradient?: string;
  borderColor?: string;
  note?: string;
}

const defaultGoals: Goal[] = [
  {
    emoji: "🎯",
    name: "Emergency Fund",
    current: 75000,
    target: 100000,
    badgeLabel: "On Track",
    badgeClass: "badge-green",
    barColor: "bg-success",
    gradient: "linear-gradient(135deg, rgba(0,210,160,0.12), rgba(0,210,160,0.03))",
    borderColor: "rgba(0,210,160,0.2)",
    note: "~3 months to go at current pace",
  },
  {
    emoji: "💻",
    name: "New MacBook",
    current: 42000,
    target: 150000,
    badgeLabel: "Slow",
    badgeClass: "badge-orange",
    barColor: "bg-warning",
    note: "Increase monthly savings by ₹3,000 to hit target",
  },
  {
    emoji: "✈️",
    name: "Bali Trip",
    current: 8000,
    target: 60000,
    badgeLabel: "New",
    badgeClass: "badge-accent",
    barColor: "bg-accent",
  },
];

const emojiOptions = ["🎯", "💰", "🏠", "🚗", "✈️", "💻", "📱", "🎓", "💍", "🏋️"];

function formatCurrency(n: number) {
  return "₹" + n.toLocaleString("en-IN");
}

export default function GoalsPage() {
  const [goals, setGoals] = useState<Goal[]>(defaultGoals);
  const [showForm, setShowForm] = useState(false);
  const [newName, setNewName] = useState("");
  const [newTarget, setNewTarget] = useState("");
  const [newEmoji, setNewEmoji] = useState("🎯");

  const handleCreate = () => {
    const target = Number(newTarget);
    if (!newName.trim() || !target || target <= 0) return;
    setGoals([
      ...goals,
      {
        emoji: newEmoji,
        name: newName.trim(),
        current: 0,
        target,
        badgeLabel: "New",
        badgeClass: "badge-accent",
        barColor: "bg-accent",
      },
    ]);
    setNewName("");
    setNewTarget("");
    setNewEmoji("🎯");
    setShowForm(false);
  };

  return (
    <>
      <h1 className="font-heading text-[26px] font-bold mb-6">Goals</h1>

      {goals.map((goal, i) => {
        const pct = Math.round((goal.current / goal.target) * 100);
        return (
          <div
            key={i}
            className="card"
            style={{
              background: goal.gradient ?? undefined,
              borderColor: goal.borderColor ?? undefined,
            }}
          >
            <div className="flex justify-between items-center mb-2">
              <span className="text-[15px] font-semibold">
                {goal.emoji} {goal.name}
              </span>
              <span className={`badge ${goal.badgeClass}`}>{goal.badgeLabel}</span>
            </div>
            <div className="flex justify-between items-center mb-2">
              <span className="amount !text-[22px]">{formatCurrency(goal.current)}</span>
              <span className="text-dim text-[13px]">of {formatCurrency(goal.target)}</span>
            </div>
            <div className="progress-bg">
              <div
                className={`progress-fill ${goal.barColor}`}
                style={{ width: `${pct}%` }}
              />
            </div>
            {goal.note && <p className="text-xs text-dim mt-2">{goal.note}</p>}
          </div>
        );
      })}

      {showForm ? (
        <div className="card mt-4">
          <p className="text-[15px] font-semibold mb-4">New Goal</p>
          <div className="flex gap-2 mb-3 flex-wrap">
            {emojiOptions.map((e) => (
              <button
                key={e}
                onClick={() => setNewEmoji(e)}
                className={`w-9 h-9 rounded-lg text-lg flex items-center justify-center cursor-pointer border ${
                  newEmoji === e
                    ? "border-accent bg-[rgba(108,92,231,0.2)]"
                    : "border-transparent bg-[rgba(255,255,255,0.04)]"
                }`}
              >
                {e}
              </button>
            ))}
          </div>
          <div className="input-group">
            <label>Goal Name</label>
            <input
              type="text"
              placeholder="e.g. New Car"
              value={newName}
              onChange={(e) => setNewName(e.target.value)}
            />
          </div>
          <div className="input-group">
            <label>Target Amount (₹)</label>
            <input
              type="number"
              placeholder="50000"
              value={newTarget}
              onChange={(e) => setNewTarget(e.target.value)}
            />
          </div>
          <button className="btn btn-primary" onClick={handleCreate}>
            Save Goal
          </button>
          <button
            className="btn btn-ghost mt-3"
            onClick={() => setShowForm(false)}
          >
            Cancel
          </button>
        </div>
      ) : (
        <button className="btn btn-ghost mt-4" onClick={() => setShowForm(true)}>
          + Create New Goal
        </button>
      )}
    </>
  );
}
