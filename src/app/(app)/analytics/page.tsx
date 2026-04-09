export default function AnalyticsPage() {
  return (
    <>
      <h1 className="font-heading text-[26px] font-bold mb-6">Analytics</h1>

      {/* Donut Chart Card */}
      <div className="card text-center">
        <h3 className="section-title mb-4">April Spending</h3>
        <svg viewBox="0 0 100 100" className="w-[150px] h-[150px] mx-auto block">
          <circle cx="50" cy="50" r="40" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="12" />
          <circle
            cx="50" cy="50" r="40" fill="none" stroke="#6C5CE7" strokeWidth="12"
            strokeDasharray="75.4 175.9" strokeDashoffset="0" strokeLinecap="round"
            transform="rotate(-90 50 50)"
          />
          <circle
            cx="50" cy="50" r="40" fill="none" stroke="#FF6B6B" strokeWidth="12"
            strokeDasharray="50.3 201" strokeDashoffset="-75.4" strokeLinecap="round"
            transform="rotate(-90 50 50)"
          />
          <circle
            cx="50" cy="50" r="40" fill="none" stroke="#00D2A0" strokeWidth="12"
            strokeDasharray="37.7 213.6" strokeDashoffset="-125.7" strokeLinecap="round"
            transform="rotate(-90 50 50)"
          />
          <circle
            cx="50" cy="50" r="40" fill="none" stroke="#FDCB6E" strokeWidth="12"
            strokeDasharray="25.1 226.2" strokeDashoffset="-163.4" strokeLinecap="round"
            transform="rotate(-90 50 50)"
          />
          <text x="50" y="47" textAnchor="middle" fill="#F0F0F5" fontSize="10" fontWeight="700" fontFamily="var(--font-heading), serif">
            ₹18,650
          </text>
          <text x="50" y="58" textAnchor="middle" fill="#8B8FA3" fontSize="5" fontFamily="var(--font-sans), sans-serif">
            Total Spent
          </text>
        </svg>
        <div className="flex justify-center gap-4 mt-4 flex-wrap">
          <span className="text-[11px]"><span className="text-accent">●</span> Food 30%</span>
          <span className="text-[11px]"><span className="text-danger">●</span> Shopping 20%</span>
          <span className="text-[11px]"><span className="text-success">●</span> Transport 15%</span>
          <span className="text-[11px]"><span className="text-warning">●</span> Bills 10%</span>
        </div>
      </div>

      {/* Budget Progress */}
      <h3 className="section-title mt-4">Budget Progress</h3>

      <div className="card">
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm">🍔 Food &amp; Dining</span>
          <span className="text-[13px] text-dim">₹5,600 / ₹8,000</span>
        </div>
        <div className="progress-bg">
          <div className="progress-fill bg-accent" style={{ width: "70%" }} />
        </div>
      </div>

      <div className="card">
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm">🛒 Shopping</span>
          <span className="text-[13px] text-danger">₹4,800 / ₹4,000</span>
        </div>
        <div className="progress-bg">
          <div className="progress-fill bg-danger" style={{ width: "100%" }} />
        </div>
        <span className="badge badge-red inline-block mt-2">Over budget by ₹800</span>
      </div>

      <div className="card">
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm">🚕 Transport</span>
          <span className="text-[13px] text-dim">₹1,200 / ₹3,000</span>
        </div>
        <div className="progress-bg">
          <div className="progress-fill bg-success" style={{ width: "40%" }} />
        </div>
      </div>

      {/* AI Insights */}
      <h3 className="section-title mt-4">AI Insights</h3>

      <div className="insight">
        <div className="tag">🤖 AI INSIGHT</div>
        <p>
          Your food spending is 23% higher on weekends. Setting a ₹500/day
          weekend limit could save ~₹2,000/month.
        </p>
      </div>
      <div className="insight">
        <div className="tag">💡 SMART TIP</div>
        <p>
          You have 3 subscriptions totalling ₹1,497/mo. Netflix hasn&apos;t been
          used in 18 days — consider pausing it.
        </p>
      </div>
    </>
  );
}
