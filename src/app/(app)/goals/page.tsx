export default function GoalsPage() {
  return (
    <>
      <h1 className="font-heading text-[26px] font-bold mb-6">Goals</h1>

      {/* Emergency Fund */}
      <div
        className="card"
        style={{
          background: "linear-gradient(135deg, rgba(0,210,160,0.12), rgba(0,210,160,0.03))",
          borderColor: "rgba(0,210,160,0.2)",
        }}
      >
        <div className="flex justify-between items-center mb-2">
          <span className="text-[15px] font-semibold">🎯 Emergency Fund</span>
          <span className="badge badge-green">On Track</span>
        </div>
        <div className="flex justify-between items-center mb-2">
          <span className="amount !text-[22px]">₹75,000</span>
          <span className="text-dim text-[13px]">of ₹1,00,000</span>
        </div>
        <div className="progress-bg">
          <div className="progress-fill bg-success" style={{ width: "75%" }} />
        </div>
        <p className="text-xs text-dim mt-2">~3 months to go at current pace</p>
      </div>

      {/* New MacBook */}
      <div className="card">
        <div className="flex justify-between items-center mb-2">
          <span className="text-[15px] font-semibold">💻 New MacBook</span>
          <span className="badge badge-orange">Slow</span>
        </div>
        <div className="flex justify-between items-center mb-2">
          <span className="amount !text-[22px]">₹42,000</span>
          <span className="text-dim text-[13px]">of ₹1,50,000</span>
        </div>
        <div className="progress-bg">
          <div className="progress-fill bg-warning" style={{ width: "28%" }} />
        </div>
        <p className="text-xs text-dim mt-2">
          Increase monthly savings by ₹3,000 to hit target
        </p>
      </div>

      {/* Bali Trip */}
      <div className="card">
        <div className="flex justify-between items-center mb-2">
          <span className="text-[15px] font-semibold">✈️ Bali Trip</span>
          <span className="badge badge-accent">New</span>
        </div>
        <div className="flex justify-between items-center mb-2">
          <span className="amount !text-[22px]">₹8,000</span>
          <span className="text-dim text-[13px]">of ₹60,000</span>
        </div>
        <div className="progress-bg">
          <div className="progress-fill bg-accent" style={{ width: "13%" }} />
        </div>
      </div>

      <button className="btn btn-ghost mt-4">+ Create New Goal</button>
    </>
  );
}
