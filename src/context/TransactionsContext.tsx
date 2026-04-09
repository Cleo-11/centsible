"use client";

import { createContext, useContext, useState, ReactNode } from "react";

export interface Transaction {
  icon: string;
  bg: string;
  name: string;
  detail: string;
  amount: string;
  type: "income" | "expense";
}

const seedTransactions: Transaction[] = [
  { icon: "🍔", bg: "rgba(255,107,107,0.12)", name: "Swiggy Order", detail: "Today, 8:32 PM · Food", amount: "-₹486", type: "expense" },
  { icon: "💸", bg: "rgba(0,210,160,0.12)", name: "Freelance Payment", detail: "Today, 2:00 PM · Income", amount: "+₹12,000", type: "income" },
  { icon: "🚕", bg: "rgba(253,203,110,0.12)", name: "Uber Ride", detail: "Yesterday · Transport", amount: "-₹234", type: "expense" },
  { icon: "🛒", bg: "rgba(108,92,231,0.12)", name: "Amazon", detail: "Apr 5 · Shopping", amount: "-₹2,199", type: "expense" },
  { icon: "📱", bg: "rgba(255,107,107,0.12)", name: "Jio Recharge", detail: "Apr 4 · Bills", amount: "-₹299", type: "expense" },
  { icon: "💰", bg: "rgba(0,210,160,0.12)", name: "Salary Credit", detail: "Apr 1 · Income", amount: "+₹45,000", type: "income" },
  { icon: "☕", bg: "rgba(253,203,110,0.12)", name: "Starbucks", detail: "Mar 31 · Food", amount: "-₹580", type: "expense" },
  { icon: "🏋️", bg: "rgba(108,92,231,0.12)", name: "Gym Membership", detail: "Mar 30 · Health", amount: "-₹3,500", type: "expense" },
];

interface TransactionsContextValue {
  transactions: Transaction[];
  addTransaction: (tx: Transaction) => void;
}

const TransactionsContext = createContext<TransactionsContextValue | null>(null);

export function TransactionsProvider({ children }: { children: ReactNode }) {
  const [transactions, setTransactions] = useState<Transaction[]>(seedTransactions);

  const addTransaction = (tx: Transaction) => {
    setTransactions((prev) => [tx, ...prev]);
  };

  return (
    <TransactionsContext.Provider value={{ transactions, addTransaction }}>
      {children}
    </TransactionsContext.Provider>
  );
}

export function useTransactions() {
  const ctx = useContext(TransactionsContext);
  if (!ctx) throw new Error("useTransactions must be used within TransactionsProvider");
  return ctx;
}
