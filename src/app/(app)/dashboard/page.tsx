import Link from "next/link";

export default function DashboardPage() {
  return (
    <>
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <div>
          <span className="text-[13px] text-dim">Good evening,</span>
          <h1 className="font-heading text-[26px] font-bold">Cleo</h1>
        </div>
        <Link
          href="/profile"
          className="w-[42px] h-[42px] rounded-full flex items-center justify-center text-lg font-semibold text-white"
          style={{ background: "linear-gradient(135deg, #6C5CE7, #00D2A0)" }}
        >
          C
        </Link>
      </div>

      {/* Balance Card */}
      <div
        className="rounded-2xl p-[18px] mb-3 border-none"
        style={{ background: "linear-gradient(135deg, #6C5CE7, #3D3488)" }}
      >
        <span className="text-xs opacity-70">Total Balance</span>
        <div className="amount my-1">₹1,24,350</div>
        <div className="flex justify-between mt-2">
          <span className="badge badge-green">↑ ₹32,000 income</span>
          <span className="badge badge-red">↓ ₹18,650 spent</span>
        </div>
      </div>

      {/* Weekly Chart */}
      <h3 className="section-title mt-4">This Week</h3>
      <div className="bar-chart mb-6">
        <div className="bar-col">
          <div className="bar bg-accent" style={{ height: "40%" }} />
          <div className="bar-label">Mon</div>
        </div>
        <div className="bar-col">
          <div className="bar bg-accent" style={{ height: "70%" }} />
          <div className="bar-label">Tue</div>
        </div>
        <div className="bar-col">
          <div className="bar bg-accent" style={{ height: "30%" }} />
          <div className="bar-label">Wed</div>
        </div>
        <div className="bar-col">
          <div className="bar bg-danger" style={{ height: "90%" }} />
          <div className="bar-label">Thu</div>
        </div>
        <div className="bar-col">
          <div className="bar bg-accent" style={{ height: "55%" }} />
          <div className="bar-label">Fri</div>
        </div>
        <div className="bar-col">
          <div className="bar bg-success" style={{ height: "20%" }} />
          <div className="bar-label">Sat</div>
        </div>
        <div className="bar-col">
          <div className="bar bg-success" style={{ height: "10%" }} />
          <div className="bar-label">Sun</div>
        </div>
      </div>

      {/* Recent Transactions */}
      <div className="flex justify-between items-center mb-2">
        <h3 className="section-title !mb-0">Recent Transactions</h3>
        <Link href="/transactions" className="text-xs text-accent-light">
          See all →
        </Link>
      </div>

      <div>
        <Link href="/transactions" className="tx-row">
          <div className="tx-icon" style={{ background: "rgba(255,107,107,0.12)" }}>🍔</div>
          <div className="tx-info">
            <p>Swiggy Order</p>
            <span>Today, 8:32 PM</span>
          </div>
          <div className="tx-amount text-danger">-₹486</div>
        </Link>
        <Link href="/transactions" className="tx-row">
          <div className="tx-icon" style={{ background: "rgba(0,210,160,0.12)" }}>💸</div>
          <div className="tx-info">
            <p>Freelance Payment</p>
            <span>Today, 2:00 PM</span>
          </div>
          <div className="tx-amount text-success">+₹12,000</div>
        </Link>
        <Link href="/transactions" className="tx-row">
          <div className="tx-icon" style={{ background: "rgba(253,203,110,0.12)" }}>🚕</div>
          <div className="tx-info">
            <p>Uber Ride</p>
            <span>Yesterday, 9:15 AM</span>
          </div>
          <div className="tx-amount text-danger">-₹234</div>
        </Link>
      </div>
    </>
  );
}
